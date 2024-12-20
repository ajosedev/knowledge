# Compound components in React

Compound components are a pattern that's similar to the `select` and `option` pattern in HTML. This pattern helps create a more flexible and expressive API, that allows for far more variations than a standard pattern. Think of a Modal component that requires props to style the close button, or style the heading, etc.

Another positive about compound components, is that you can create a component that exposes a simpler API (think a particular variant) from a basis of flexible compound components - this doesn't work the other way around. It's easier to make the underlying componentry flexible and then expose a subset, its much harder to do it the other way around (too many props, prop drilling, etc.) [[20221128012645-generic-components-reuse]]

If you don't need to share state or data, these are often referred to as [[20220801045634-design-system-subcomponents]] in the design system space.

Two main methods of sharing state between related components:
- React.cloneElement
- Context

The former is easier to create, but the latter allows for more flexibility as the child compound component doesn't have to be a direct descendent of its parent.

With React.cloneElement, the parent component will re-render its children extending new props:
```javascript
{React.Children.map(children, child => (
    React.cloneElement(child, newProps)
))}
```

With React.Context, the parent component will render its children inside of a provider, which the child components may use:
```javascript
<Context.Provider value={value}>
    {children}
</Context.Provider>
```

To show that components are tied together, they usually share a namespace. e.g. `Menu` and `MenuButton`, or `Menu.Button`.

https://jjenzz.com/compound-components

There's also uncontrolled compound components as explained here: https://jjenzz.com/avoid-global-state-colocate/

[[componentapi]]
[[components]]
[[designpatterns]]
[[react]]
[[reactapi]]