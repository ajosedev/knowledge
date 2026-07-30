# Reducing the bundle size of large objects

This is quite a niche solution, but can come in handy. If you have a list of objects that you want to provide alternative syntaxes for, export this as a single constant, rather than a large object.

This came up in a design system, where we had an object that mapped a [[js]] syntax to a [[20231101113023-css-variables]] syntax. However each time we added a new token, it would expand the size of this object, which affected bundle sizes.

Instead, we can export this as a function with types using [[ts]]. This keeps the bundle size low, while still offering things like autocomplete.
