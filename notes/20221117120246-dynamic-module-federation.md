# Dynamic Module Federation

Module Federation loads remotes at runtime. Usually the remote URL is defined at build time, and then executed at runtime.

However it's possible to specify the remotes at runtime instead. This opens more possibilities around deploying to different environments, rollbacks, A/B testing, etc. There are different methods on doing this. Some involve a simple promise resolve of a JSON file, others inject information onto the `window`.

NX calls this 'dynamic module federation'. Also known as 'dynamic remote modules' or 'dynamic remotes'.

https://oskari.io/blog/dynamic-remotes-module-federation/
https://nx.dev/recipes/module-federation/dynamic-module-federation-with-angular

Similar to the idea behind [[20220628012715-import-maps]].

[[architecture]]
[[deployment]]
[[microfrontends]]
[[web]]