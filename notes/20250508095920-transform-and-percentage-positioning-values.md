# How do percentage values work in CSS position properties?

When using a percentage value in a positioning property like `top` or `inset`, it represents a percentage of the width (or height) of the parent element.

This means using `top: 50%` on a child element positions the **top edge** of the element. Then to vertically center something, an additional `transform: translateY(-50%)` is used to translate the element by 50% of its **own height**.

This makes the classic CSS snippet for vertically centering:
```css
.element {
  position: absolute; /* or fixed */
  top: 50%;
  transform: translateY(-50%);
}
```

This is why using `left: 50%` is brittle to scrollbars, as the width of the parent element (usually the browser viewport/window dimensions itself) does change.
[[20250507092249-floating-elements-and-scrollbars]]

[[css]]