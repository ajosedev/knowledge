# Deferred Static Generation (DSG)

Most of Gatsby is set up around [[20221128051011-static-rendering]]. The major drawback with this approach is build time. Small changes can have a large surface area, which requires rebuilding every page.

Deferred Static Generation (DSG) is a rendering method that seeks to solve this by delaying building certain pages until run time. Note that these aren't [[20220912120502-server-side-rendering]] pages, they're just built at a later time. Once built, they become static again.

For lesser used pages, this can be a great tool to get your site mostly updated quickly, and pick up the edge cases later.

It's similar to [[20220815014424-incremental-static-generation]], but the data is locked in at initial build time. An ISR build on Monday can re-build on Friday with new data. A DSG build on Monday will build on Friday with stale data. Both have their own pros and cons in that regard.
ISR is closer to per-request SSR, and DSG is closer to lazy SSG.

https://www.gatsbyjs.com/blog/deferred-static-generation-guide/
https://www.reddit.com/r/gatsbyjs/comments/ur6g9p/deferred_static_generation_vs_incremental_static/

[[architecture]]
[[deployment]]
[[infrastructure]]
[[rendering]]