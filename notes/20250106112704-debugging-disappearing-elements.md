# How to debug disappearing elements

https://patrickbrosset.com/articles/2023-11-22-freezing-a-page-in-devtools/

```js
setTimeout(() => {debugger}, 3000)
```

Chrome also has a "Emulate a focused page" option, but it doesn't seem to work 100% of the time.

Setting up breakpoints on attribute/subtree modifications also seems to work well.

[[browsers]]