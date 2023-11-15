# Refs with useCallback

#todo - separate doc on useRef and callback refs in general. Then this becomes a 'why to use useCallback with callback ref doc'?
https://julesblom.com/writing/ref-callback-use-cases
why usecallback? https://julesblom.com/writing/ref-callback-use-cases#ref-callback-caveat
https://elfi-y.medium.com/react-callback-refs-a-4bd2da317269
#todo - how to share a ref?
```js
  const combineRefs = el => {
    internalRef.current = el

    if (typeof externalRef === 'function') {
      externalRef(el)
    } else {
      externalRef.current = el
    }
  }
```
Keep in mind the caveat around inline functions below

More complicated versions exist to handle using `.current`, multiple refs, Typescript, etc. It starts to get a little confusing and that's why NPM packages exist for it.

---

Caveat
>If the `ref` callback is defined as an inline function, it will get called twice during updates, first with `null` and then again with the DOM element. This is because a new instance of the function is created with each render, so React needs to clear the old ref and set up the new one. You can avoid this by defining the `ref` callback as a bound method on the class, but note that it shouldn’t matter in most cases.

Refs accept a callback ('callback ref'), which means they can be used well with `useCallback`. This has a couple advantages.

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

https://tkdodo.eu/blog/avoiding-use-effect-with-callback-refs

[[react]]
[[reacthooks]]