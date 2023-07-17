# Selective Hydration

>How to use combine streaming server-side rendering with a new approach to hydration, selective hydration

Sort of a combination of [[20221130103902-streaming-server-side-rendering]] and [[20221130102846-progressive-hydration]].

By default React requires all components to be ready before it can server render the HTML. Components with an external API call can block others from loading. Finally once this is done, React [[20221130103211-hydration|hydrates]] the tree entirely, meaning all Javascript needs to be fetched and executed before any are interactive.

React 18 added Selective Hydration. When combined with [[20221130103902-streaming-server-side-rendering]], this allows you to start streaming HTML ASAP, and then hydrate them as soon as possible. This effectively lets us lazy-load components when using [[20220912120502-server-side-rendering]].

Large components are wrapped in Suspense, so the tree generation isn't blocked. Before the large component has even been sent to the server, the rest of the app is already hydrated. Then once it's ready, it can stream the small amount of HTML and JS required to replace any fallback components.

[[architecture]]
[[deployment]]
[[infrastructure]]
[[react]]
[[reactsuspense]]
[[rendering]]