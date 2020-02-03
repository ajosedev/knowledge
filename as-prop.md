```jsx
// Use 'as' prop
const Grid = ({ as: Element, ...props }) => (
  <Element className="grid" {...props} />,
);

Grid.defaultProps = {
  as: 'div',
};

// Can call as
<Grid as="main">
  <div />
</Grid>
```
