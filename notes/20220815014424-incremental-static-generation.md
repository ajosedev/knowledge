# Incremental Static Generation (ISSG)

Related: Incremental Static Regeneration (ISR)

>Update static content after you have built your site

[[20221128051011-static-rendering]] works well for static content, but becomes more troublesome if the content is either dynamic ([[20221128053251-static-rendering-dynamic]]), or changes frequently. All the benefits of SSG, but handles dynamic data better.

For example a blog that adds a new post ideally wouldn't rebuild the entire site - it would just build the new page. iSSG lets you pre-render a subset of pages, rather than everything.

Incremental Static Regeneration (ISR) is very similar, which allows generating updates to existing pages. The rebuild can be triggered by various things, such as a request, webhook, Github Action, polling action, etc. If the generation is triggered by a request, the browser can handle it similar to a lazy load, where a spinner or similar is shown while the page generates.

[[20220815104442-event-driven-architecture]]
[[20221128051011-static-rendering]]
[[20221107042513-edge-computing]]

[[architecture]]
[[infrastructure]]
[[rendering]]