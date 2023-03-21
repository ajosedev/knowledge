# Responsive props

Responsive props are a single prop that can take multiple values to apply at different breakpoints. This ties responsive design together with React props to avoid needing bespoke CSS for responsive styling. Instead of managing media queries or mobile (or desktop) specific JSX, a single prop can be used.

```jsx
<Box width={['100px', '500px', '50%', '100%']} />

<Box width={{ mobile: '100px', tablet: '500px', medium: '50%', desktop: '100%' }} />
```

Originally from `styled-system`, these are pretty prevalent across different design systems. Sometimes they are represented as an object, sometimes an array, but are a very similar result.

Objects might make more sense for several reasons:
- Easier to understand when values wanted is less than the total amount of breakpoints
- Easier to add new breakpoints

The implementation can be augmented in several ways in an effort to keep the code DRY. e.g. rather than using an object as a lookup table to design tokens, use a callback so that complex CSS declarations can be made.

[[components]]
[[css]]
[[designsystem]]
[[react]]
[[reactapi]]
[[responsivedesign]]