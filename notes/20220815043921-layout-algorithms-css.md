# Layout algorithms in CSS

Rather than thinking about [[css]] as a bunch of unrelated properties, think of them as connected layout algorithms.

Properties apply differently in the context of different layout modes. The most common layout modes are:
- Flexbox
- Positioned
- Grid
- Table
- Flow (default)

Layout modes also have its own variants, e.g. the 'Positioned' mode has variants for 'relative', 'absolute', etc.

Given a property like `z-index`, this will actually have no effect in Flow layout, but will do something in other layout modes. Instead of thinking that `z-index` needs other properties to make it work, shift the mental model to `z-index` only works in particular modes.

Another example is that something as ubiquitous as `width` works differently in Flow and Flexbox. Flexbox only uses it as a suggestion, whereas Flow considers it a rule. It's not a quirk of Flexbox, it's a deliberate implementation difference.

Properties require the context of the layout mode to work. In order to understand CSS, consider the layout mode you're working in.

[[css]]
[[layout]]