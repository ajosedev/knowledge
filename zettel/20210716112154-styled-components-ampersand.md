# Ampersand (&) in styled-components

The ampersand `&` in styled-components can be used to refer back to a component's self, similar to how it works in SASS. This opens up the standard possibilities:
```css
&:hover {
    /* .this-component:hover */
}
&:focus {
    /* .this-component:focus */
}
& + & {
    /* .this-component + .this-component */
}
&.something {
    /* .this-component.something */
}
& ${OtherComponent} {
    /* .this-component .other-component */
}
```

It also lets you define rules for the component that reference other components, i.e. do x when this component is in y. This is the basis of the 'single source' methodology. This approach is helpful for keeping styles wholly contained in the one component, which are reliant on other components' state.
```css
${OtherComponent} & {
    /* .other-component .this-component */
}
${OtherComponent}:hover & {
    /* .other-component:hover .this-component */
}
${OtherComponent} + & {
    /* .other-component + .this-component */
}
```

One thing to note about `&` is that it may have inconsistent expansion. Sometimes it can refer to the 'static' class of a component, i.e. the class with common rules that exist across all variants of the component. Other times it can refer to the 'dynamic' class, i.e. the classes created for each variant: when rules are conditional, based on props, etc.
[[20210802120112-styled-components-two-classes]]

This can cause issues if `&` refers to the static class and you have multiple variations of the same component. Instead of only applying the rules of this variation, it can result in applying the the rules set across all variants, which likely leads to the wrong result.
```css
${HiddenInput}:checked + & {
    background-color: ${colorProp}
    /* & may expand to the static class, leaving clashing rules dependent on colorProp */
    /* Both of these are rendered to the page: */
    /* .hidden-input:checked + .static-class: background-color: blue */
    /* .hidden-input:checked + .static-class: background-color: red */
}
```

The fix is to use `&&`. This selector is both used as a precedence boost to achieve more specificity, but also applies the dynamic class always.
```css
${HiddenInput}:checked + && {
    background-color: ${colorProp}
    /* .hidden-input:checked + .abc.abc: background-color: blue */
    /* .hidden-input:checked + .xyz.xyz: background-color: red */
}
```

https://github.com/styled-components/styled-components/issues/3265
https://github.com/styled-components/styled-components-website/pull/743
https://github.com/styled-components/styled-components/issues/3244#issuecomment-687676703

[[20210202094246-styled-components-single-source]]

[[css]]
[[cssinjs]]