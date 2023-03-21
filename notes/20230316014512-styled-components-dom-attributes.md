# Styled Components and mixing props

#todo - go through this doc and clean up the examples
e.g. don't need `color` and `aria-hidden` as they're doing the same thing
e.g. `foo` should actually be used as a styling prop (remember to keep it as a boolean)
e.g. `bar` is not necessary on every example, but it's helpful to show that non-boolean attributes don't cause the error.

A long-winded answer to solving the following error:
```
Warning: Received `true` for non-boolean attribute `gray`. If this is expected, cast the value to a string.
```

Or perhaps more accurately, why the `styled` API is kinda flawed.

For the purpose of this doc, a React component can have two different types of props:
- ‘Behaviour props’, those used to commonly write React. If you’re not using CSS-in-JS, all your props are behaviour props
- Styling props, props only meant for styling your component when using a `styled` API (e.g. styled-components).
When these two start to merge, problems start to appear.

## How Styled Components works
The error above is fairly simple to explain, but hard to solve. **A prop is being passed from a call site, and ultimately rendered to the DOM as an attribute. If the prop (and thus attribute) has a boolean value, the error will appear.**
	**Note that if the prop has a non-boolean value, it will still write to the DOM, but will not throw an error.**
This is actually a React error, but using Styled Components and mixing behaviour and styling props makes it more likely to happen.

This is explained by the intended behaviour of Styled Components.
>This component can take any prop. It passes it on to the HTML node if it's a valid attribute, otherwise it only passes it into interpolated functions.
>
>Note: if you style a standard tag (like `<h1>` in above example), styled-components will not pass the custom props (to avoid the Unknown Prop Warning).
>
>However, it will pass all of them to a custom React component
https://styled-components.com/docs/api#using-custom-props

This means that a valid attribute (e.g. `color`) will be passed to the DOM, even if the component is a direct Styled Component of a DOM element, e.g. `styled.p`. Note that for attributes like `color`, this will not throw an error. The attribute is valid, and the value is not a boolean. However, it will still be written to the DOM, which is usually not wanted.

Note that Emotion is similar - it uses a magic whitelist that blocks some props from making it to the DOM. However, it seems (needs checking) to only write valid HTML attributes for string tags:
>By default, Emotion passes all props (except for theme) to custom components and only props that are valid html attributes for string tags

## Mixing behaviour props and styling props
This seems to be the core problem. Using the `styled` API in Styled Components (and Emotion) will seemingly always lead to confusing, and often incorrect behaviour. Once behaviour props and styling props are combined, they have to be split up again. Otherwise the mish-mash of props are passed to every component in the tree, and then need to magically be separated at the right time.

## Preventing props from being passed down
```jsx
const BaseStyledComponent = styled.div`
    padding: 4px;
    ${({ color }) => `color: ${color};`}
    ${({ active }) => active && `border: 1px solid black;`}
`;

const WrappedStyledComponent = styled(BaseStyledComponent)`
    border: 1px solid red;
`;

<BaseStyledComponent active color="red" xHeight="4" aria-hidden="true" bar={true}>
	BaseStyledComponent
</BaseStyledComponent>
<WrappedStyledComponent active color="red" xHeight="4" aria-hidden="true" bar={true}>
	WrappedStyledComponent
</WrappedStyledComponent>
```

In the above use, the base level component is a SC component wrapping a standard DOM element. Thus, both components have the following behaviour:
- Effectively uses the inbuilt `defaultValidatorFn` (more on this later), to omit invalid attributes being passed to the DOM
- Writes valid attributes (`color`, `xHeight`, and `aria-hidden`) to the DOM
- Does not write `active` to the DOM, as it's not a valid attribute
- Renders as red text, as `active` is read in the styling block

This is an _okay_ result. Our props are passing through, we're using them as we want, and we're getting no errors. However, we are putting the `color` attribute on the DOM, as it's considered valid. If for some reason we had a valid attribute name as a styling prop AND it was boolean, it would throw an error.

### Transient props
A possible solution is to use **transient props**. If we make `$color` a transient prop, it will no longer pass through to the DOM. It stops at this styled component.

```jsx
const BaseStyledComponent = styled.div`
    padding: 4px;

    ${({ $color }) => `color: ${$color}`}
`;

<BaseStyledComponent $color="red">
	BaseStyledComponent
</BaseStyledComponent>
```

Since we're using the Styled Components component directly, we also have to update the call site, which may be a non-starter. If you had a wrapping component, the changes may be encapsulated in that component:

```jsx
const InternalStyledComponent = ({ color }) => <BaseStyledComponent $color={color} />;
```

Note that it's somewhat common to export low level primitives as a Styled Component directly. Thus creating two different APIs in your codebase.

### shouldForwardProp
Another solution is **shouldForwardProp**. We can re-write the Styled Components declaration and explicitly tell it to not forward the prop to not be forwarded on. In this case, we're preventing it from being forwarded to the DOM. Like transient props, this will also prevent it being passed to any lower components in the tree.

```jsx
const BaseStyledComponent = styled.div.withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
        !['color'].includes(prop) && defaultValidatorFn(prop),
})`
    padding: 4px;

    ${({ color }) => `color: ${color}`}
`;
```

This solution allows us to keep our component calls the same - we don't have to use `$color` in call sites.

## What actually shows the error
Another core issue is spreading props to the DOM. I'm still torn if if this is a good idea in general. It's useful for low level components that want to use `aria` props or similar, e.g. Checkbox. However it does lead to issues with traceability.

```jsx
const BaseComponentSpread = (props) => <div {...props} />;

const BaseComponentNoSpread = ({ className, children }) => (
    <div className={className}>{children}</div>
);

const WrappedBaseComponentSpread = styled(BaseComponentSpread)`
    padding: 4px;
    ${({ color }) => `color: ${color};`}
    ${({ active }) => active && `border: 1px solid black;`}
`;

const WrappedBaseComponentNoSpread = styled(BaseComponentNoSpread)`
    padding: 4px;
    ${({ color }) => `color: ${color};`}
    ${({ active }) => active && `border: 1px solid black;`}
`;

<WrappedBaseComponentSpread active color="red" xHeight="4" aria-hidden="true" bar="1">
	WrappedBaseComponentSpread
</WrappedBaseComponentSpread>
<WrappedBaseComponentNoSpread active color="red" xHeight="4" aria-hidden="true" bar="1">
	WrappedBaseComponentNoSpread
</WrappedBaseComponentNoSpread>
```

The output of these two components are quite different. Both components render their styles appropriately.

The first component (the one that spreads props):
- Passes valid attributes `color`, `xHeight`, and `aria-hidden` to the DOM
- Passes invalid attributes (`bar`) to the DOM
	- Note that this doesn't throw an error, only because it's a non-boolean attribute
- Throws the aforementioned non-boolean attribute error for `foo`
The other component:
- Does not pass any attributes to the DOM, valid or invalid
- Throws no errors

Both have their own problems. Adding the appropriate `aria-*` props to the latter requires a fair bit of clutter, depending on the permutations needed. However it outputs the most desirable DOM, and still works with the styling (as we're explicitly passing `className`).

Assuming that it's not feasible to remove prop spreading, we're back to transient props and shouldForwardProp.

Note: I believe there's a subtle difference between a component using Styled Components internally, vs wrapping the entire component in `styled` directly. In theory, the former would be closer to the first use case in this doc, where magic omission is performed, as we're wrapping a DOM element. The latter wouldn't do any omission by design.

### Transient props
As there's an existing component being wrapped in Styled Components, this API can be useful to keep the styling encapsulated.

```jsx
const BaseComponentSpread = (props) => <div {...props} />;

const WrappedBaseComponentSpread = styled(BaseComponentSpread)`
    // `color` is not passed to BaseComponentSpread
    ${({ $color }) => `color: ${$color}`}
`;
```

### shouldForwardProp
Updating the Styled Components definition once again fixes our problem:
```jsx
const WrappedBaseComponentSpread = styled(BaseComponentSpread).withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
	    // Warning, defaultValidatorFn probably shouldn't be used here.
        !['color'].includes(prop) && defaultValidatorFn(prop),
})`
    border: 1px solid red;

    ${({ color }) => `color: ${color}`}
`;
```

As we're using `defaultValidatorFn`, this is actually doing two things:
- Stops `color` from being passed down to `BaseComponentSpread`
- Prevents props that aren't valid attributes from being passed down to `BaseComponentSpread`.

However, this can cause issues. Now both `foo` and `bar` aren't being passed to lower level components as they aren't valid HTML attributes. Thus each component in the tree must only block the styling-only components, and no more. To do this, we shouldn't use `defaultValidatorFn`.

Note that keeping the styles encapsulated to the component is important. We don't want to add unnecessary [[20210202103254-coupling-cohesion|coupling]] by omitting props (e.g. `foo`) only on the lowest level component. `BaseComponentSpread` may have no knowledge of `foo`, and thus shouldn't be responsible for removing it from the DOM.

In theory the lowest level component could use `defaultValidatorFn` in combination with spreading props to prevent unnecessary DOM additions and errors. However, the lowest level component isn't always a Styled Components component, nor is it able to remove the spread of props. Then we're a bit stuck.

If you control everything used Styled Components, this actually is possible. Given a Button that just spreads props, and a StyledButton, you could prevent the forwarding at the StyledButton level. That way, no excess props are ever added.
However as soon as there's one component outside of your purview, problematic props are re-added. Props passed to StyledStyledButton will get passed all the way down, unless explicitly ignored at some level.

## Fixing the error, but better?
There's an insidious issue here that is hard to solve. As soon as behaviour props and styling props are mixed together, we have to figure out some smart way to separate them. On top of that, these props can be introduced at any level and muddy up the entire tree.

I think the key answer here is the **css prop**. By styling components this way, we avoid mixing behaviour and styling props entirely.

For this to work, you have to avoid the `styled` API altogether. Any use of it will mix the two types of props back together. Assuming you're then spreading props onto the DOM, the issue comes back. In terms of a design system, this might be an okay compromise. Once users start wrapping your components in `styled`, it's up to them to avoid passing unnecessary props and attributes to the DOM.

In essence, this is similar to the transient props API, but is a slightly more agnostic way of solving the problem. To me, this feels like a root solve that works with other CSS libraries, and a bit more 'React'. Additionally, it may help with other things like [[20221024113715-css-in-js-build-runtime]].
	I don't think you'd be able to use an exported Styled Components component directly either, but that may not be a bad thing.

Alternatively, if you can avoid spreading props in your components, that can also mitigate this problem.

## TL;DR
- Using `styled` on a standard DOM element performs some magic omission of non-valid attributes
	- If your lowest level component is one of these, it helps with the errors
- Using `styled` on a React component does not perform this magic
- React is what's actually throwing this error
- Transient props can be iffy as it's changing the API, which can lead to issues when using Styled Components components directly
- shouldForwardProp seems better as it's a bit more hidden to consumers, but can run into issues of not passing desired props through
- Either way, the problem needs to be solved at every level. Wrapped components can re-introduce garbage props
- Mixing styling and behaviour props makes it hard - thus the styling API is inherently flawed
- Be careful about how and where you're passing props

https://github.com/emotion-js/emotion/issues/2193

#blog

[[cssinjs]]
[[styledcomponents]]