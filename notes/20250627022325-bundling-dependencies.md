# Bundling dependencies into packages

What you should bundle into your package seems to be a bit controversial. As far as I understand, this guidance changes on the type of your package: applications or libraries.

Libraries are smaller packages that are consumed by larger applications. Think of using something like `lodash` in your frontend platform. Libraries aim to be a bit more 'pure' and as small as possible. Applications have more complexity around running the application, handling `node_modules` in Docker, etc.

**The following document is mostly focused on bundling dependencies into a library.**

As far as I understand, to not bundle something in most bundlers, you need to mark it as external. `externals` provides a way of excluding dependencies in the output bundles, instead relying on them to be present in the environment. This keeps the import in your source code the same, which will be evaluated at run time.

Peer dependencies should never be bundled into your package. The very nature of them means you're relying on them to be supplied by something else.
Many plugins exist to do this automatically, e.g. https://www.npmjs.com/package/rollup-plugin-peer-deps-external. Regardless of what you want to make external, you can do this with some nice JSON parsing.
```js
{
	externals: [...Object.keys(packageJson?.peerDependencies ?? {})],
}
```

Regular dependencies are a bit more controversial. Many people state that libraries should not bundle any dependencies, i.e. mark everything as external. This gets into a theoretical argument where dependencies + external may mean everything becomes a peer dependency, but that gets a bit strange too.
Some bundlers like [microbundle](https://github.com/developit/microbundle/wiki/How-Microbundle-decides-which-dependencies-to-bundle) make this decision for you, marking any dependency or peer dependency as external.
	I think peer dependencies have to share a single matching version, where as regular dependencies do not. This might be the key difference? See below.

Assuming you aren't bundling a dependency, be sure to include it in your package's `dependencies` list. This ensures that the consuming application installs any dependencies that you haven't bundled. Additionally this hands over the complexity to something like NPM, which can de-dupe multiple versions as outlined in [[20230411043626-npm-dependency-tree]].

Note that bundling a dependency locks in the dependency version at build time. This can be problematic, as consuming applications can't say, update a transitive dependency to remove a possible security fix in a patch version.

Going even further, some people state that libraries shouldn't be bundled at all. As libraries are consumed by an application which is presumably bundled, why double bundle it?

[[20230411040305-node-dependencies]]

https://github.com/vitejs/vite/discussions/6198
https://cmdcolin.github.io/posts/2025-02-23-vitelibrarymode

[[buildtooling]]
[[dependencies]]
[[npm]]
