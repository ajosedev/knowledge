# Module federation != microfrontends

#todo 

Not the same thing.

Microfrontends are an artchitectural pattern

Helps fix organisational problems.

Enables indepdent deployments, separate ownership, better domain driven design, etc.

Much like microservices.

Don't need to use module federation for microfrontends. Can use other technologies like Web Components or [[20220628012715-import-maps]]

Microfrontends are not encapsulated 100%.
There's a cost to having differing languages, frameworks, etc.
Hard to be language-agnostic.


Module federation doesn't have to load microfrontends, it can load any JS.
Module federation aids microfrontends' composition.

Techniques have existed prior to module federation to bundle multiple microfrontends into a single app.

Module federation helps solve common dependencies. This was a big sticking point in other bundling techniques at scale. Microfrontends had to share the same dependency, or bundles had to re-download different version of the same dependency.

Module federation is a 'code transport layer'.

[[architecture]]
[[browsers]]
[[microfrontends]]
[[microservices]]
[[monoliths]]
[[web]]