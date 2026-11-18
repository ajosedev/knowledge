# Containing block

The containing block dictates the size and position of an element. Things like [[20250508095920-percentage-values-css]] are calculated using the containing block. The containing block is usually the [[20220801123109-css-box-model|content area]] of an element's nearest block-level ancestor, but not always.

From MDN:
The process for identifying the containing block depends entirely on the value of the element's [`position`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position) property:

1. If the `position` property is **`static`**, **`relative`**, or **`sticky`**, the containing block is formed by the edge of the _content box_ of the nearest ancestor element that is either **a block container** (such as an inline-block, block, or list-item element) or **establishes a formatting context** (such as a table container, flex container, grid container, or the block container itself).
2. If the `position` property is **`absolute`**, the containing block is formed by the edge of the _padding box_ of the nearest ancestor element that has a `position` value other than `static` (`fixed`, `absolute`, `relative`, or `sticky`).
3. If the `position` property is **`fixed`**, the containing block is established by the [viewport](https://developer.mozilla.org/en-US/docs/Glossary/Viewport) (in the case of continuous media) or the page area (in the case of paged media).
4. If the `position` property is **`absolute`** or **`fixed`**, the containing block may also be formed by the edge of the _padding box_ of the nearest ancestor element that has any of the following:
    - A [`filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/filter), [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter), [`transform`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/transform), [`perspective`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/perspective), [`rotate`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/rotate), [`scale`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scale), or [`translate`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/translate) value other than `none`.
    - A [`contain`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/contain) value of `layout`, `paint`, `strict` or `content` (e.g., `contain: paint;`).
    - A [`will-change`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/will-change) value containing a property for which a non-initial value would form a containing block (e.g., `filter` or `transform`).
    - A [`content-visibility`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/content-visibility) value of `auto`.

https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Display/Containing_block

[[css]]