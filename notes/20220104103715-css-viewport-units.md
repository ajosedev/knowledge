# Viewport units

`vw` - 1% of the viewports width
`vh` - 1% of the viewports height
`vmin` - 1% of the viewports smaller dimension (in portrait, this would be width)
`vmax` - 1% of the viewports larger dimension (in portrait, this would be height)

In addition to these standard viewport units, CSS Values and Units Level 4 is adding some more viewport sizes: large, small, and dynamic viewport.

The large viewport uses the `l` prefix: `lvh`, `lvw`, `lvmin`, and `lvmax`. This calculates the viewport assuming any user agent (UA) interfaces are **retracted**.

The small viewport uses the `s` prefix and does the opposite, it assumes everything is **expanded**.

The dynamic viewport uses the `d` prefix and is aptly named. It adjusts itself depending on if the UA elements are shown or not. The value will always be in between the limits of the large and small.

Of course there's also the [[20210524133704-css-logical-properties]] implementations for these units too, such as `vi`, `dvi`, and `svb`.

These help solve the 'Safari 100vh' bug, where the address bar overlaps content making it unusable. A solution for that should be to use dvh.

[[browsers]]
[[css]]
[[responsivedesign]]
[[web]]