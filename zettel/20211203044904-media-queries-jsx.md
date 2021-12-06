# Attrs, breakpoints, and JSX

There's no way of setting `attrs` conditionally (effectively passing props) for certain breakpoints in `styled-components`. 

Say there's a styling prop on a component, and you want that style to change at different breakpoints. To do this, you'll probably have to introduce media queries, which means introducing CSS (in some capacity). Then once you're in CSS-land, you'll have to re-implement your styling entirely in CSS.

This isn't too bad when you want to just change a font-size, but if it's a differently styled variant it's not really feasible.

The alternate approach is to have access to the current breakpoint in JSX. Using a hook, `matchMedia` function, or some other way of accessing the current breakpoint allows you to add JS logic that changes the prop directly. This works decently, but getting breakpoint information in JSX is sometimes difficult with SSR and similar.

The crux of this issue seems to be mixing styling in CSS and styling in JSX (through props).
The solution to this problem may be [[20211203043448-responsive-props]]

[[cssinjs]]
[[responsivedesign]]
[[styledcomponents]]