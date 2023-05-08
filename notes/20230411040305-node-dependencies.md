# Dependency types in Node/NPM/Yarn

There are three main dependency types:
1. dependencies
2. devDependencies
3. peerDependencies

As a tl;dr - Dependencies are required to run, Dev Dependencies are only required to develop. Peer Dependencies are Dependencies required by your Dependencies.

## Dependencies
Installed directly and transitively. Installing `foo` in your project will install `foo`'s Dependencies. If A requires B, and B requires C, then C gets installed, otherwise, B could not work, and neither would A.

## Dev Dependencies
Installed directly, not installed transitively. Installing `foo` in your project will not install `foo`'s Dev Dependencies. We don't need to test B to test A, so B's testing dependencies can be left out.

Additionally, running `npm install` in `production` mode, or running `npm install --prune` will not install Dev Dependencies directly.

## Peer Dependencies
Peer Dependencies are automatically installed in npm 7+ [[20230315102941-npm-7-peer-dependencies]]. Usually used for plugins, kind of like an [[20210705094040-inversion-of-control]]
The plugin itself doesn't use the Peer Dependency ('host'), but the developer usually puts the two together. Thus the plugin states its compatibility, but relies on the developer to use the host and plug the two together.

#todo - Are you able to import from/use a specified peer dependency? I would imagine no - otherwise it's a regular dependency. Using it for tests might be a weird middle ground

[[node]]
[[npm]]