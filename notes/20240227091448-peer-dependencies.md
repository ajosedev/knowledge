# Peer dependencies

The usual use case of a peer dependencies allows users to upgrade a core library independent of plugins. The user has more control.
Peer deps are also more resilient to issues in runtimes. Think of a tool like Emotion which uses React - it should have a defined version of React to use, but that contract needs to be fulfilled by the consumer of Emotion.

However, they often create a more tangled dependency web as consumers of the package have another contract they are tied to. For this reason (and others), keep them as wide as possible.

Remember how they tie to [[20220509012212-semantic-versioning]] too:
> In an npm module, any peer dep change that removes a previously valid version from being valid is a major/breaking change. Peer deps are part of the public API.

Crucially that includes version upgrades, even if they are patch/minor.

https://github.com/semver/semver/issues/502

[[dependencies]]
[[npm]]