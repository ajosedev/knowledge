# Static Rendering, or Static Site Generation (SSG)

>Deliver pre-rendered HTML content that was generated when the site was built

This aims to avoid the [[20221219125527-web-metrics#First Contentful Paint (FCP)|FCP]] and [[20221219125527-web-metrics#Time to Interactive (TTI)|TTI]] problems of [[20221128042243-client-side-rendering]], while also negating the [[20221219125527-web-metrics#Time to First Byte (TTFB)|TTFB]] of [[20220912120502-server-side-rendering]]. Static rendering is ideal for static content - you can't generate personalised content at build time (easily).

>A static HTML file is generated ahead of time corresponding to each route that the user can access. These static HTML files may be available on a server or a [[20221107042836-cdn]] and fetched as and when requested by the client.

Since the generation is done in advance, the time on the server is negligible. This can be combined with things like [[20221107042513-edge-computing]] for extra speed. Or use performance techniques such as caching. Unlike [[20220912120502-server-side-rendering]], the processing capability isn't split across multiple users - the work has already been done.

Ideally the amount of client-side Javascript is kept minimal so that pages can become interactive as quick as possible.

Static content doesn't mean pages can't have data. The content can be queried at build time, generating as many pages as needed.

Advantages:
- Fast. The work is done, and the server needs to send the generated file down the pipe.
- Can be sped up with different [[networking]] techniques like [[20221107042513-edge-computing]]

Disadvantages:
- Many HTML pages can be generated
- Dynamic content requires redeploys

You can augment SSG with client-side APIs to better handle dynamic content [[20221128053251-static-rendering-dynamic]]

[[architecture]]
[[infrastructure]]
[[rendering]]