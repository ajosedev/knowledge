# Derive state, don't sync it

It's better to derive or calculate state, rather than unnecessarily mirror it.

For example, given a form that accepts a `firstName` and `lastName`, don't additionally store this data in a third state value of `fullName`. Instead, calculate `fullName` as needed by concatenating other state variables during rendering.

This makes your code faster (you avoid the extra “cascading” updates), simpler (you remove some code, [[20200307105301-dry]]), and less error-prone (you avoid bugs caused by different state variables getting out of sync with each other).

[[react]]