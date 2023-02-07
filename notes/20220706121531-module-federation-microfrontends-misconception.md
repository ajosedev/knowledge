# Module federation != microfrontends

Module federation is not the same thing as a [[microfrontends]] architecture. The former is a 'code transport layer', and the latter is an 'architectural style'.

A microfrontend architecture helps fix organisational problems. It enables independent deployments, ownership boundaries, [[20230130013734-domain-driven-design]], etc. It's [[microservices]], but for your frontend only.

Microfrontends are not encapsulated 100%. There's a cost of having microfrontends with different languages, frameworks, etc. It's hard for them to be totally language agnostic.

Module federation is a tool to aid composition of separate microfrontends. Other techniques and technologies also exist, like Web Components or [[20220628012715-import-maps]]. Techniques have existed prior to module federation to enable an 'app shell'-like model too.

Module federation doesn't even need to load a microfrontend, it can load any Javascript.

Module federation helps solve common dependencies. This was a big sticking point in other bundling techniques at scale. Microfrontends had to share the same dependency, or bundles had to re-download different version of the same dependency.

[[architecture]]
[[browsers]]
[[web]]