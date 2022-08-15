# Using JSDoc with Typescript

Utilising JSDoc, we can get Typescript types in `.js` files.

`@type` can reference types. The type can be:
1. A primitive, like `string`
2. Declared in a Typescript declaration
3. Declared in a JSDoc `@typedef` tag

The type syntax can be fairly complicated, like conditional types, unions, etc.

For example:
```js
// jest.config.js

/** @type { import("@jest/types").Config.InitialOptions } */
module.exports = { ... }
```

https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html

[[js]]
[[ts]]