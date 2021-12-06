# Computed property names in objects

ES6 added support for computed property names in objects, allowing the object key to be determined dynamically:

```js
const variable = 'foo';
const obj = {
	[variable]: 'bar',
}

// obj = { foo: 'baz' }
```

[[js]]



