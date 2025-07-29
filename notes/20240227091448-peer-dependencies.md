# Peer dependencies

The usual use case of a peer dependencies allows users to upgrade a core library (package) independent of plugins (other packages). The user has more control - they don't all have to be kept in lockstep.
Peer deps are also more resilient to issues in runtimes. Think of a tool like Emotion which uses React - it should have a defined version of React to use, but that contract needs to be fulfilled by the consumer of Emotion.

However, they often create a more tangled dependency web as consumers of the package have another contract they are tied to. e.g. if the plugin wants to use a feature in a newer version of the core library, it will have to adjust its peer dependency range which has an affect on the end user. For this reason (and others), keep peer dep requirements as wide as possible.

Remember how they tie to [[20220509012212-semantic-versioning]] too:
> In an npm module, any peer dep change that removes a previously valid version from being valid is a major/breaking change. Peer deps are part of the public API.

Crucially that includes version upgrades, even if they are patch/minor.

As of npm7, mandatory peer dependencies are automatically installed.

There are also optional peer dependencies, but their use case is even more niche - often giving the user a choice, or for opt-in support.

https://github.com/semver/semver/issues/502

[[buildtooling]]
[[dependencies]]
[[npm]]