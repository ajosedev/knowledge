# Void vs Undefined in Typescript

`void` is not the same as `undefined`.

`void` represents not returning a value. It's the inferred type if no `return` statements exist in a function. In JavaScript, a function that doesn’t return any value will implicitly return the value `undefined`.

A function that returns `void` can still return a value, but the value return should not be observed.

This is why `Array.forEach` uses `void` for the callback function. The callback can return any value, but you're promising not to use that value for anything.

[[ts]]