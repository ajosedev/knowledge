# Refs with useCallback

Refs accept a callback, which means they can be used well with `useCallback`. This has a couple advantages.

As `useEffect` can't accept a `ref.current` in its dependencies array due to React not re-rendering when a `ref` value changes. This means the standard snippet for focusing an element will only work if that element exists when the component is mounted.
```js
useEffect(() => {
  if (inputElement.current) {
    inputElement.current.focus();
  }
}, [inputElement.current]);
```
Using an empty deps array `[]` has the same problem - it only works if the element is there on first render.

A better solution is to use `useCallback` - this gets called each time a ref attaches to a different node.
```js
const callbackRef = useCallback(inputElement => {
  if (inputElement) {
    inputElement.focus();
  }
}, []);
```

This will be called with the element that the ref is attached to once it exists, and then called with `null` once it no longer exists. This also doesn't have the issue of it firing too early, as it will be re-called if the underlying node changes, e.g. if it is dynamically rendered later.
Note the `[]` for the deps array.

keywords: autofocus

[[react]]