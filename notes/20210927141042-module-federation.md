# Module Federation

Module Federation allows an application to dynamically load code at **runtime** from another application and intelligently share dependencies. If the federated module you're consuming has a common dependency, Webpack will only download it if necessary (i.e. you won't download React twice).

Broadly, it's similar to GraphQL federation, which combines the APIs from multiple microservices into a single API.
One of it's wide-lens goals is to make sharing code easier.

This allows developers to create separate builds per page, with an application shell that efficiently loads code from each page, preventing page reloads. This in turn, allows you to deploy these individual builds independently of each other, if you desire.
	This doesn't rely on module federation, but module federation makes it better.
	Assuming a vertical split [[20220801041930-splitting-microfrontends]]

Imagine each page being a separate microfrontend, with its own tooling, code, repository, deploy steps, ownership, domain, etc. but still offering a SPA-like experience with dependency sharing.

[[20221223105636-why-module-federation]]

Be careful of vendor lock in here. Although this technology is still quickly developing, it's mostly tied to [[webpack]] and it's derivatives. [[vite]] does have support, but from my understanding it works slightly differently. [[20220628012715-import-maps]]

Single-spa was a framework(?) or library(?) in this space. Module federation is mostly an alternative to using single-spa, but can be used in conjunction.
https://single-spa.js.org/docs/recommended-setup/#overview

Module federation != microfrontend architecture [[20220706121531-module-federation-microfrontends-misconception]]

https://webpack.js.org/concepts/module-federation/

[[architecture]]
[[deployment]]
[[microfrontends]]
[[microservices]]
[[rendering]]
[[web]]
