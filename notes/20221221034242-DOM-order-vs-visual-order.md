# Document orders and a11y

A document has three 'orders':
- The DOM order - how the HTML is laid out ('source order')
- The visual order - how the content is presented on the page visually
- The focus order - the order elements are tabbed to ('tab order')

The DOM order should always be correct. Source ordering is always the most important for the accessibility of the document. By default, the reading order of an HTML document is the source (DOM) order. A screen reader (or other assistive devices) will read the document in the order that is set out in the doc. The focus order also follows this same order.

Where it gets tricky is when you separate these orders. It's very easy to separate the DOM order and the visual order. This has been an issue forever, but is exaggerated by features like [[flexbox]] and [[cssgrid]]. It's actually noted in the flex spec:
> "Authors _must not_ use order or the *-reverse values of [`flex-flow`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow)/`flex-direction` as a substitute for correct source ordering, as that can ruin the accessibility of the document."

Properties like `flex-direction` change only the visual order. The focus order remains the same. e.g. in a reversed container that features "1 2 3", the focus order will still be "1 2 3", but right to left.

The simplest way to ensure your page is accessible is to keep the three orders in sync. The DOM order should reflect the proper reading order, and then ensure the visual presentation follows that order. This keeps the experience between all your users the same. The guiding principle there is don't use `tabindex` (other than `0` or `-1`), don't use `order`, don't use any `reverse` values for flex.

The main exception I see for using `order` is a card with a heading and an image. The best semantic DOM order for this is heading then image, and use `order` to place the image above the heading.

The new CSS properties `reading-flow` and `reading-order` are similar to `order`, but change the focus order AND the visual order. Now the DOM order is the odd one out. This is especially helpful when you require different orders on different screen sizes ([[responsivedesign]]), but the DOM order should still be logical and accessible.
[[20250526060007-css-reading-flow]]
https://alastairc.uk/2017/06/the-responsive-order-conflict/
>The source document should express the underlying logical order of elements. The [reading-flow](https://drafts.csswg.org/css-display-4/#propdef-reading-flow) and [reading-order](https://drafts.csswg.org/css-display-4/#propdef-reading-order) properties exist for cases where a given document can have multiple reading orders depending on layout changes, e.g. in response to [media queries](https://www.w3.org/TR/mediaqueries-5/#media-query). In such cases, the most common or most fundamental reading order should be encoded in the source order so that the document is sensical without CSS.

However this brings up an interesting question, when is it okay to separate the three orders?  What's 'acceptable' is a bit more nuanced. The two biggest [[a11y]] criterias are:
https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html & https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html.

The former talks about ensuring a correct meaningful order. Not everything is 'meaningful' however, such as two unrelated articles. The order inside the article is meaningful, but the two articles can be presented in either order and still be okay. A key excerpt is below. This to me implies that the visual order != DOM order.
>- **Example 2:** CSS is used to position a navigation bar, the main story on a page, and a side story. The visual presentation of the sections does not match the programmatically determined order, but the meaning of the page does not depend on the order of the sections.

The latter talks about ensuring a correct focus order. It specifically calls out that there may be multiple logical reading orders for a page, and the focus order does not have to be identical to the reading order (i.e. DOM order). This means that focus order != DOM order
>The focus order may not be identical to the programmatically determined reading order (see [Success Criterion 1.3.2](https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html)) as long as the user can still understand and operate the web page. Since there may be several possible logical reading orders for the content, the focus order may match any of them. However, when the order of a particular presentation differs from the programmatically determined reading order, users of one of these presentations may find it difficult to understand or operate the web page. Authors should carefully consider all these users as they design their web pages.

The very existence of `reading-flow` and `reading-order` implies that separating visual order (and focus order) from DOM order is also okay. https://drafts.csswg.org/css-display-4/#reading-order has the following excerpt:
>- There are clear use cases for disconnecting the reading and navigation order from the box layout order, the most fundamental of which is to make sure the reading and navigation order matches the **visual perception order** when it is not the same as the box layout order. (Visual perception is non-linear, and is influenced by things like the size, color contrast, and spacing of a visual element, not just its spatial coordinates on the page.)

Overall, it's rather confusing. You need to ensure that everything is logical (don't make a 1, 3, 4, 2 order), but it seems like it's *okay* to mix up these orders, but there are many pitfalls in this area. A guiding principle with a bit more wiggle room is to create a document in a logical order that would work without any CSS.

https://www.w3.org/WAI/WCAG21/Techniques/css/C27
https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence
https://www.w3.org/WAI/WCAG21/Understanding/focus-order

https://adrianroselli.com/2015/09/source-order-matters.html
https://developer.chrome.com/blog/reading-flow
https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction#accessibility

[[a11y]]