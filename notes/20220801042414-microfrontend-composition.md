# Composing microfrontends

There are three ways to compose a micro-frontends architecture. The decision should be based on your project.
- Client-side composition. An app shell loads microfrontends (usually from a CDN) often through a JS entrypoint. Works for both horizontal and vertical splits.
- Edge-side composition. Assembles the view at a CDN level. Usually uses Edge Side Includes (ESI) [[20221202123047-edge-side-includes]]. Only really makes sense for horizontal splits. [[20221107042513-edge-computing]]
- Server-side composition. Cached at the CDN level and served at either compile or runtime. TTL would depend on how personalised the content is. Works for both horizontal and vertical splitting.

![[Microfrontend composition.png]]

[[20220801041930-splitting-microfrontends]]

[[architecture]]
[[microfrontends]]