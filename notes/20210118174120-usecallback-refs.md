# Refs with useCallback

Using [[20250519010331-ref-callbacks]] with useCallback lets you execute a ref callback **once**. This is only needed in specific scenarios, usually a regular [[20250519010331-ref-callbacks]] can do the job.

As [[20250519010331-ref-callbacks]] are called when you pass a different callback, they often get called every render. If you want to keep things more stable, or if you want to only run said callback once, you can use `useCallback` in combination with a ref callback.

```js
const callbackRef = useCallback(inputElement => {
  if (inputElement) {
    inputElement.focus();
  }
}, []);
```

This will be called with the element that the ref is attached to once it exists, and then called with `null` once it no longer exists. This also doesn't have the issue of it firing too early, as it will be re-called if the underlying node changes, e.g. if it is dynamically rendered later.
Note the `[]` for the deps array.

This is a better solution than the usual [[20220815044638-useeffect]] approach, as that only executes on the parent component mounting, which can be separate from the input component mounting.

keywords: autofocus

https://julesblom.com/writing/ref-callback-use-cases
https://tkdodo.eu/blog/avoiding-use-effect-with-callback-refs

[[20250519010331-ref-callbacks]]
[[20250519010717-ref-lists]]

[[react]]
[[reacthooks]]