# Streaming Server Side Rendering

>Generate (sections of) HTML to be rendered on the server in response to a user request

Rather than generating a single HTML file with [[20220912120502-server-side-rendering]], it's possible to generate only the necessary markup and split it into smaller chunks. This can then be streamed to the client, so it can start rendering ASAP.

You can also [[20221130103211-hydration|hydrate]] the received DOM nodes as you receive them, leading to very quick interactive UI. This improves the [[20221219125527-web-vitals#Time to First Byte (TTFB)|TTFB]], even better than regular SSR. The FP and [[20221219125527-web-vitals#First Contentful Paint (FCP)|FCP]] are also lower. [[20221130125640-selective-hydration]]

Both streaming and [[20221130102846-progressive-hydration]] can bridge the gap between a pure SSR and [[20221128042243-client-side-rendering|CSR]] experience.

[[architecture]]
[[deployment]]
[[infrastructure]]
[[rendering]]