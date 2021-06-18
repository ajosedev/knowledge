# Nullish coalescing operator (??)

`??` is a logical operator that returns its right-hand side when the left-hand side is `null` or `undefined`.

This is similar to the logical OR operator (`||`), which returns the right-hand side if the left is any `falsy` value.

Very useful if you consider some falsy values (such as `''` or `0`) as valid.

#js
#ts