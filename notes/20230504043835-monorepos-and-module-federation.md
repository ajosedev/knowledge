# Monorepos and Module Federation

These two ideas ([[monorepo]] and [[20210927141042-module-federation]]) don't rely on each other, but they do complement each other.

Monorepos are often used to help aid in breaking up monoliths piecemeal. It can get code in a related domain into more composable and organisable dependencies and libraries. Often this negates the need for a [[npm]] package to share across many repos, as multiple apps are co-located in the space.

One thing that's nice about Module Federation, is that builds on top of an organised monorepo well. Rather than having to commit to a new architecture, consider getting your code into a well organised monorepo, and then sprinkling a bit of MF on top. This can help solve issues at scale, and also help your deployable apps communicate outside of the monorepo. [[20221223105636-why-module-federation]]