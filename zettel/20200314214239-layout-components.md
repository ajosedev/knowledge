# Layout components
Layout components that apply generic styling to its children elements are more helpful than applying styling directly to the children. It allows a wider range of combinations, as it's creating puzzle pieces that compose together, rather than components written for specific use cases.

> Avoid any properties on the **root element** of a component that affect, or are affected by, elements outside the bounds of the component.
https://visly.app/blog/layout-isolated-components

'Root element' here refers to the top-level element returned by the component, not the inner elments that exist inside the component.

Avoid these properties:
align/justify-self,  percentages (for widths/heights, etc), margins, tab index, absolute positioning

[[20200314213706-flow-containers]]

#components
#css
#layout