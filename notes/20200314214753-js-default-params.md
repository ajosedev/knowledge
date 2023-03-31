# Default parameters in JS

Default parameters can:
- Use previous values
- Call functions (that have already been declared)

This includes calling functions using values of previous parameters.

```js
	const printUserDetails(first, last, full = combineStrings(first, last), firstLetter = first[0]) => {};
```

https://codepen.io/ajosedev/pen/wvBaVja
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

[[js]]