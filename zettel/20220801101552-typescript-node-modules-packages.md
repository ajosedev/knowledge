# Publishing Typescript npm packages

NPM packages that use Typescript should be built and transpiled before publishing them. This would result in a separate plain javascript file with a corresponding type definition file. Then the entry for the package can point towards that vanilla JS.

It's expected for all dependencies to be transpiled - Webpack will not transpile them by default. Doing so would be a massive waste of time and computation cost. If a package isn't built/transpiled, you can omit it from the standard `exclude` in Webpack with regex.

[[buildtooling]]
[[js]]
[[npm]]
[[ts]]
[[webpack]]