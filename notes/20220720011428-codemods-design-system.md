# Codemods in a design system

Codemods are helpful in a DS
- Can ship signficant sweeping changes easier
- Good for breaking changes [[20220509021116-design-system-versioning]]
- Good for deprecations

Codemods are a great way of enabling change in a design system without too much manual work. Don't let yourself be constrained by only making moves that are easy to change. Codemods enable more complex API changes that let consumers update easily.

Broadly, codemods:
- Help significant sweeping changes quicker, and easier
- Are helpful for breaking changes [[20220509021116-design-system-versioning]]
- Useful for deprecations
- Save time

#breakdown
Note that codemods should be idempotent. They're often re-run on the same area of code and need to support that. Often the reason is to support newer code that's added in a PR, or after resolving merge conflicts or similar.

[[ast]]
[[codemods]]
[[designsystem]]