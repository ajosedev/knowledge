# The `object` type in Typescript

In Typescript, there's a type called `object` (lowercase 'o'), which represents any non-primitive type. The primitive types as of now are:
* `string`
* `boolean`
* `number`
* `bigint`
* `symbol`
* `null`
* `undefined`

Any other type is considered a non-primitive type, such as arrays and objects.

Do not get this type confused with `Object` (uppercase 'o') which describes functionality that is common to all JS objects.

There is also `{}`, which is the **empty type**. This describes an object which has no members on its own, but still has access to all properties and methods defined on the `Object` type.

[[ts]]