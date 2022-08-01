# Design system versioning

Semver is the standard, just use that. [[20220509012212-semantic-versioning]]
Encourage designers to use it too. Both to bridge the discipline gap, and as a useful tool for designer-only products (e.g. UI Kit).

There are two broad strategies of versioning a design system component library:

**Version the entire library**
One version across all components.
If one component changes or has a breaking change, you'll need to increment the entire library.
Often this strategy required for using a compiled CSS stylesheet, as all the CSS is bundled into one file.

**Version per component**
Breaking changes for one component only affect that particular component. This does not necessarily mean you can use multiple versions of the same component on one page, which is more of a technical challenge/strategy.

As for particular version bumps, remember a major version is purely a breaking change. It's not a marketing ploy or a change that necessarily requires large amounts of effort.

When deprecating a component(s), consider current use. Also consider [[codemods]]/etc to make the job of migration easier. Teams should have a process for deprecating things, and a timeline of when you're going to do it.

Design documentation should be kept up to date as the components change. Use a similar versioning system here too.

[[20220509021714-design-system-versioning-docs]]
[[20220509021750-design-system-version-tokens]]

[[designsystem]]