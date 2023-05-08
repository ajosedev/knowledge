# Space in Design Systems

Following on from the idea of [[20210519122422-first-class-space]], it can make sense to create [[designtokens]] to better represent your space. This can lead to better visual consistency and help simplify decisions for developers and designers.

Grid != space. Grid is just something that uses space.

When creating tokens, there's a few aspects. Namely the values, and what you apply the values to.

For the values, these should follow a consistent, non-linear pattern. The values should be fairly recallable, but don't need to be a linear progression which is often too comprehensive. A good set is something like: 2, 4, 8, 16, 24, 32, 48, 64, 96, etc. This isn't a silver bullet, but note that the spaces scale in size, and than some values are intentionally omitted.

Properties are a bit more complex. Nathan Curtis proposes the following:
- Inset: Inset is essentially just padding. Unlike other properties, the values are equal on all sides. Pretty much used on everything.
- Squish Inset: Similar to inset, but has a greater horizontal padding than vertical. Often used for things like buttons or cells.
- Stretch Inset: The opposite of stretch inset. Used for things like text boxes, inputs, etc.
- Stack: The gap between vertically spaced components
- Inline: The gap between horizontally spaced components

Using this mix of properties and values, you can apply a subset of your main spacing tokens to each property. For example:
- Inset: XS (4), S (8), M (16), L (32), XL (64)
- Inset squish: S (8 4), M (16 8), L (32 16)
- etc

https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62

[[20200314214239-layout-components]]

[[design]]
[[designsystem]]
[[designtokens]]