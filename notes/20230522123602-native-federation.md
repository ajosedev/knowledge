# Native Federation

One of the common apprehensions with [[20210927141042-module-federation]] is that it's a [[webpack]]-only tool. Although this isn't necessarily true, there are additional plugins for [[vite]], [[nextjs]], and more, it still seems to be a Webpack-first tool. Different plugins may require a different way of working, API, etc.

Alternatively, there's Native Federation. Native Federation is a framework and tooling agnostic implementation of Module Federation. It aims to avoid vendor lock-in altogether, and set up a less restricted future.

It uses browser-native tooling, but implements the regular mental model of Module Federation, including a similar config.

https://www.angulararchitects.io/aktuelles/announcing-native-federation-1-0/

[[architecture]]
[[deployment]]
[[microfrontends]]
[[microservices]]
[[rendering]]
[[web]]
