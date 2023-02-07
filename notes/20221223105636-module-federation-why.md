# Why use Module Federation?

#todo

- Import code from other builds at **runtime**
- Share vendor code dynamically at **runtime**
	- When possible, dependencies are shared, rather than needed to be re-downloaded
- Allows microfrontends to work like a [[monoliths]]
- Improve DX without compromising UX
- Works in any JS environment
- Now supports SSR
	- makes sense for both client side composition or server side composition
- supports horizontal and vertical split
- develop and deploy independently
	- both horizontal and vertical
- easier rollbacks, controlling of versions, etc
	- each 'app' is isolated. can easily point to an older version, rollback the version, deploy a new one, etc.

It allows you to import code from other builds at **runtime**.
App shell that avoids page reloads.

- Don't need to publish modules to npm to share them, e.g. a header component
	- requires redeploys when you update the module
	- with MF you just update and deploy the module, and then all the things using it are automatically updated without also needing to deploy
		- this is actually a little closer to a MFE solution than a MF solution, but MF reduces some friction with it
- Can shift towards ownership at a component-level. Since it can be easily shared, a team could own a component. Make it as smart as possible and encapsulate everything it needs. Then the component could be mounted anywhere and just work.
	- At the very least, ownership doesn't have to be an entire page [[20220801041930-splitting-microfrontends]]
- SPA-like experience with independent development and deploys
	- Microsites/most MFE architectures didn't have this as most things were separate 'apps' with completely different entries

Using [[monorepo]]s with Module Federation makes a lot of sense too
- Some problems around sharing can be solved by a monorepo, e.g. a header component
	- however, still need to deploy the host apps
- However many enablement things rely on a single app shell
	- Don't need to add boilerplate/code/whatever else to multiple apps
- Helps deal with different dependency versions

[[20221128105028-spa-mpa]] an MPA doesn't help there

Why use it over server or ESI composed MFEs? [[20220801042414-microfrontend-composition]]
- app shell?

You can always do [[20220911060950-code-splitting]] yourself too.
- manual
- doesn't deal with shared deps as well
- still building a monolith

[[architecture]]
[[deployment]]
[[microfrontends]]
[[microservices]]
[[rendering]]
[[web]]
