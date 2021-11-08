# Headless UI components

Also known as 'renderless components', or other similar names.

These are UI-less components that separate the logic and behaviour of a component from its visual representations. They provide primitives to apply to your own components, or components you can build on top of. This way, the complexity of keyboard behaviour, accessibility, DOM structure, etc. is encapsulated within the headless component, allowing your components to just add styling. This can be a great boon for creating an internal accessible design system, as you only have to handle styling, not behaviour.

In React, these are commonly exposed as a hook which returns props to spread on your own components. Alternatively, they can be exported as unstyled components which accept styling through various means.

A common strategy to ensure that props are being passed appropriately is to pass a `ref` to an underlying element which the headless component can spy on.

Some examples are:
- ReachUI
- React ARIA
- Reakit

https://medium.com/merrickchristensen/headless-user-interface-components-565b0c0f2e18
https://github.com/jxom/awesome-react-headless-components

#components
#react