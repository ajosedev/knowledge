# Reusable components and width

Similar to [[20200402104023-components-margin]], component benefit from being unopinionated about their width. That is, take up all the horizontal space given to it by it's parent.

This keeps things simple, expected, and aligned with the base functionality of a `div` or other block-level elements.

Then if you require the component to be restricted, use a [[20200314214239-layout-components]] to handle that behaviour.

Something like Button gets a little bit weird though, as they may want to match their content. But an option should still be available.

[[20210519122422-first-class-space]]

[[components]]
[[css]]
[[designsystem]]
[[layout]]
[[space]]