Styling `p` elements (or similar) directly, or styling consecutive `p` elements to achieve vertical rhythm, can be problematic:
```css
  p {
    margin-bottom: 1em;
  }
```
or
or
```css
  p + p {
    margin-bottom: 1em;
  }
```

Problems:
  - When the layout is altered or may not be vertical (e.g. in a CSS Grid), the margin-bottom will still apply even though it may not be adding whitespace vertically between the two elements
  - Inflexible as the `margin-bottom` is always set to `1em`
  - Difficult to manage when using other elements, such as `h1`s, `span`s, etc.

The solution is to move the control to a parent container which can handle the whitespace of its children.
```css
  .flow {
    --flow-space: 1em;
  }

  .flow > * + * {
    margin-top: 1em; /* Fallback for browsers without custom property support */
    margin-top: var(--flow-space);
  }
```

As it uses a custom property, we can use specificity on children elements to change it when we require more, or less whitespace.
```css
  h2 {
    --flow-space: 2em;
  }
```

Inspired by [Andy Bell](https://24ways.org/2018/managing-flow-and-rhythm-with-css-custom-properties/)
