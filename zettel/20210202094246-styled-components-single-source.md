# Single source of styles in Styled Components

Styled Components helps with 'contextual styles', styles that change depending on where the component is used, or its context. For example, a `TextLink` will have its default styling, but inside of an `Aside`, it should have modified styling.

One way of approaching this is to re-style the underlying element in the context:
```javascript
const Aside = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}
const Wrapper = styled.aside`
  /* Base styles */
  a {
    color: var(--color-text);
    font-weight: var(--font-weight-bold);
  }
`;
```

This is **not** the way to go, it's separating styles across different areas, and its not immediately obvious that it's hitting `TextLink`.

A similar approach would be to import `TextLink` inside of `Aside` and use that as the selector instead of `a`. This is better, but still not ideal as it's splitting the styling of `TextLink` throughout different files.

A better way to do this is to encapsulate the styling of `TextLink` wholly within `TextLink`, keeping it all in one place:
```javascript
// TextLink.js
import { Wrapper as AsideWrapper } from '../Aside'
const TextLink = styled.a`
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);
  ${AsideWrapper} & {
    color: var(--color-text);
    font-weight: var(--font-weight-bold);
  }
`;
```

An alternative approach which also has good use is the 'composition' API:
```javascript
const HalloweenTextLink = styled(TextLink)`
  font-family: 'Spooky Font', cursive;
`;
```

This is good and definitely has it's uses, but it doesn't work for everything. In the above example, using a specialised `AsideTextLink` would require the developer to know every modification of `TextLink` and when to use each one. It's more manual to apply contextual styling also.
However this approach is better for one-offs, as we don't need contextual styling for event pages and similar, as it would add lots of bloat throughout many components.

https://www.joshwcomeau.com/css/styled-components/#single-source-of-styles

[[20210716112154-styled-components-ampersand]]

[[css]]
[[cssinjs]]
[[styledcomponents]]