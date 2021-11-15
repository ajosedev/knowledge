# Space as a first-class concept

'First-class space' refers to the idea that space should be considered a first-class citizen. Space isn't just a by-product of components, it's something that requires consideration as it exists on the same level as component design.

Space is something that goes _between_ components - it is not tied to individual components.

Components have an internal amount of space they require, i.e. their width and their height. However they don't naturally have a prescribed amount of external space they require (e.g. margin). As components can be used in various ways, space is **contextual** and **relative** to what's on the page.

This mindset is a lot closer to the `gap` property of CSS, and avoids having to deal with `:last-child` rules and similar.

[[20200314214239-layout-components]]
[[20200402104023-components-margin]]

[[components]]
[[css]]
[[layout]]
