# Logging large objects and arrays

Sometimes objects and arrays get cut off when logging to terminal in [[js]]. To solve this, you can use the following hack:

```
console.log(JSON.stringify(object, null, 2))
// or for large objects
console.dir(object, { depth: null })
```

[[node]]
[[shell]]