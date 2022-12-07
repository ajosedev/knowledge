# Default parameters in JS
Default parameters can:
- Use previous values
- Call functions (that have already been declared)

```js
	const printUserDetails(first, last, full = combineStrings(first, last), firstLetter = first[0]) => {};
```

[[js]]