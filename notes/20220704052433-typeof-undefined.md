# Checking a variable is undefined with typeof

Remember that `typeof` returns a string, meaning  this will work:
`typeof variable === 'undefined'`

but this will not:
`typeof variable === undefined` 

Omitting the `typeof` will trigger an error directly, as you're acting on an undefined variable.

Relatedly, the following will check if a variable is `undefined` or `null`:
```js
if (myVar == null) {
  // true if myVar is null or undefined
}
```

[[js]]
[[ts]]