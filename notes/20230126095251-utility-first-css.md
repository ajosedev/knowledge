# Utility-first CSS

Utility-first CSS relies on creating lower-level generic utility classes that can be applied to HTML as needed. There's a lot of overlap here with [[20210927112243-atomic-css]], where classes are created to do a single thing. e.g. `m-8` applies a 8px margin, and that's it.

Layout components are similar in this regard too, abstracting utility you constantly rely on. [[20200314214239-layout-components]]

"The more a component does, or the more specific a component is, the harder it is to reuse."

In theory, there's lots of positives here:
- Once you've got a good base of utility classes, you stop writing CSS, and thus your CSS stops growing
- Less energy and concern in naming classes
- Avoid duplication of style rules
- Leans into composition
- Easier deletion and maintenance of styles, as classes are generic and don't get orphaned as easily [[20220801120838-css-explicit-dependencies]]

However there are some negatives that come up often:
- Is really verbose, and often hard to read. In theory they can be abstracted, e.g. one class applies multiple utility classes
- Too easy to do whatever you want - your `p` tag can give itself a non-standard margin compared to every other `p` tag. Although it's also a useful tool in enforcing constraints. e.g. scales for margins, palettes for colours, etc.
- 'Violate the separation of concerns', although this point is hotly debated.
- Isn't the same as vanilla CSS - you have to learn a new API
- Not maintainable has you have to change classes everywhere for wide-sweeping changes. Again, [[abstraction]] may be helpful here

It often gets compared to inline styles, but that's not really true. Utility-first CSS has better support for wanted constraints (e.g. the systems mentioned earlier), responsive design, component states, tooling, etc.

[[api]]

Keywords: Tailwind, utility CSS, functional CSS