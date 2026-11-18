# How do percentage values work in different CSS properties

Using a percentage value in CSS is tricky, as the percentage is tied to different things depending on the property.

| Property | What 50% uses |
| --- | --- |
| [translateX()](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateX#values) | 50% of the element’s transform reference-box width |
| [translateY()](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateY#values) | 50% of its transform reference-box height |
| [left / right](https://developer.mozilla.org/en-US/docs/Web/CSS/left#values) | 50% of the containing block’s width |
| [top / bottom](https://developer.mozilla.org/en-US/docs/Web/CSS/top#values) | 50% of the containing block’s height |
| [width](https://developer.mozilla.org/en-US/docs/Web/CSS/width#values) | 50% of the containing block’s width |
| [height](https://developer.mozilla.org/en-US/docs/Web/CSS/height#values) | 50% of the containing block’s height, if that percentage can be resolved |
| [padding-*](https://developer.mozilla.org/en-US/docs/Web/CSS/padding#values) | All four sides use the containing block’s inline size (usually width) |
| [margin-*](https://developer.mozilla.org/en-US/docs/Web/CSS/margin#values) | All four sides likewise use the containing block’s inline size |
| [border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius#values) | Horizontal radii use the element’s width; vertical radii its height |
| [font-size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size#values) | The parent’s font size |
| [line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height#values) | The element’s own font size |

On a given MDN page, there's 'Percentages' inside of the 'Formal definition'. That tells you what each property references.

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

This is also tied to the [[20261013042135-css-containing-block]], as technically the values are not based on the parent element, but the containing block.

[[css]]