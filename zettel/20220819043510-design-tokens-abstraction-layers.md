# Design tokens and layers of abstractions

The number of abstraction layers can correlate to the ease of chance with design tokens.

As mentioned in [[20211029153348-semantic-design-tokens]], adding abstraction layers lets you change levels without impacting others. However, it's important to note that the number of layers impacts the kind of changes you can make.

Each layer of abstractions keeps things in sync. Given three layers of abstractions, each layer of abstractions are easy to change, as long as you change the entire layer.

For example:
0. The base HEX, `#000`
1. The reference to your palette, `grey900`
2. The initial intent of the colour, `border-color`
3. The component usage of the colour, `input-border`

If you make a change at a lower level, all levels above it are affected.
- Change the hex, and `grey900`, `border-color`, and `input-border` all change.
- Change `border-color` to reference `blue700`, and only `input-border` changes.

There's value here. If you think all form components might change their border colour in the future, having an abstraction for `input-border` allows them to change without changing other uses of `border-color`.

However there's also a maintenance overhead. This may be overkill and slow down the system as it's being created.

As always, find the balance.a

[[20220822094537-themeable-design-systems]]

[[abstraction]]
[[architecture]]
[[designsystem]]
[[designtokens]]