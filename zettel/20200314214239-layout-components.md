# Layout components

Layout components that apply generic styling to its children elements are more helpful than applying styling directly to the children. This strategy allows you to make fully unopinionated components, and then lay them out as necessary, making the components more flexible. A well-built component should not affect anything outside of itself - for that reason, adding `margin` to components is bad practice.

Layout components also help you align space to a set scale. Some example components are: `Stack`, `Inline`, and `Box`

https://mxstbr.com/thoughts/margin/

> Avoid any properties on the **root element** of a component that affect, or are affected by, elements outside the bounds of the component.
https://visly.app/blog/layout-isolated-components

'Root element' here refers to the top-level element returned by the component, not the inner elments that exist inside the component.

[[20200314213706-flow-containers]]
[[20210519122422-first-class-space]]

#components
#css
#layout