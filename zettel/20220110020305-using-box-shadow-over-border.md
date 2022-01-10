# Using box shadow over border

It may be better to use the `box-shadow` property over `border` to achieve a border UI. The main reason is to avoid changing the dimensions of the element when they are added or removed.

When working in a design system, this extra cohesion may be worth it over other tradeoffs (such as a slight bleed), as it makes composition a lot easier.
Take a 'tabs' component with a consistent underline amongst options. Rather than each element having to render its own border 'on top' of another border using negative margins, box-shadows will just overlay with no effort.

Anecdotally I've also noticed aliasing issues when using border in combination with `border-radius` on small width borders.

[[css]]
[[designsystem]]