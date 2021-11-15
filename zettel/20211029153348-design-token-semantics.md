# Design token semantics

Thought: should design tokens aim to be semantic whenever possible? If so, how far is too far?

If your design tokens are named after tints/shades, such as `grey100`, it's easy to change the underlying hex value to perform a wide sweeping change. However, if a single token is used used for more than one consistent use, such as `grey300` representing both disabled text and a menu background colour, it's impossible to change one without changing the other.

By introducing an additional abstraction layer above your tints/shades, e.g. `text--disabled` maps to `grey300`, it's possible to change one use without changing the other. Since this is another level of abstraction, it's still trivial to change the underlying hex value of `grey300` if desired.

However this probably can be extended too far and get confusing, do you need separate tokens for menu-bg, card-bg, etc? Don't go overboard.

[[20211029152633-design-token-names]]

#design
#designsystem