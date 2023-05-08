# DOM order vs Visual order

By default, the reading order of an HTML document is the source (DOM) order. A screen reader (or other assistive devices) will read the document in the order that is set out in the doc. The tab order also follows this same order.

However technologies like [[flexbox]] and [[cssgrid]] can modify this order, separating the DOM order from the visual order. Even absolute positioning and floats have this power.

In general the guidance is to keep these two orders the same. The DOM order should reflect the proper reading order, and then ensure the visual presentation follows that order. This keeps the experience between all your users the same.
Note there are exceptions to the rule, e.g. re-ordering a card heading below a card image, as shown [here](https://adrianroselli.com/2020/02/block-links-cards-clickable-regions-etc.html#Order).

There are currently talks to introduce new [[css]] properties, namely `layout-order` and `reading-order`. These would allow assistive technologies to follow something other than the source order, once again putting all users on the same level.

Keyword: Reading order

https://www.w3.org/WAI/WCAG21/Techniques/css/C27
https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence
https://www.w3.org/WAI/WCAG21/Understanding/focus-order

https://adrianroselli.com/2015/09/source-order-matters.html
https://rachelandrew.co.uk/archives/2019/06/04/grid-content-re-ordering-and-accessibility/
https://webaim.org/blog/flexbox-and-the-screen-reader-experience/
https://developer.chrome.com/blog/reading-order/

[[a11y]]