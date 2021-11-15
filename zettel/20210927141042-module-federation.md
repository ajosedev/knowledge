# Module federation

Broadly, module federation is a _build-time_ tool (that works at runtime?) that allows you to dynamically load code from another application and intelligently share dependencies. If the federated module you're consuming has a dependency, Webpack will only download it if necessary (i.e. you won't download React twice).
Broadly, it's similar to GraphQL federation, which combines the APIs from multiple microservices into a single API.
One of it's wide-lens goals is to make sharing code easier.

This allows developers to create separate builds per page, with an application shell that efficiently loads code from each page, preventing page reloads. This in turn, allows you to deploy these individual builds independently of each other, if you desire.

Imagine each page being a separate microfrontend, with its own tooling, code, repository, deploy steps, etc. but still offering a SPA-like experience with dependency sharing.

**Import maps** exist in a similar space, supported by browsers natively. They allow control over what URLs get fetched by JS' `import` statements at _runtime_, by offering a separate mapping between the module and it's URL, rather than having to embed the has/location in every file. This allows you to update the imported module (and the import map) without updating the consuming module.

https://webpack.js.org/concepts/module-federation/
https://single-spa.js.org/docs/recommended-setup/#overview

[[browsers]]
[[js]]
[[web]]
