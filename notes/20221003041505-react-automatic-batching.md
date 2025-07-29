# Automatic Batching in React & flushSync

React 18 introduced Automatic Batching. Multiple state updates are batched into a single re-render for better performance, and to prevent unnecessary renders.

Prior to this change in React 18 only updates inside React event handlers were batched. Note that React doesn't batch some things intentionally, like click handlers. Using the [[20220704020508-usestate-function]] can be helpful here to ensure you're acting upon the most recent value of state.

Part of this is queuing the updates. This is part of the batching, not a separate concept. Multiple state updates (e.g. on the same state) are requested (queued), and then batched appropriately before any of them execute or the re-render happens: https://react.dev/learn/queueing-a-series-of-state-updates

```js
// Before: only React events were batched.
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // React will render twice, once for each state update (no batching)
}, 1000);

// After: updates inside of timeouts, promises,
// native event handlers or any other event are batched.
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // React will only re-render once at the end (that's batching!)
}, 1000);
```

To opt out of automatic batching, you can call `ReactDOM.flushSync()`. With the following code, the scroll can execute prior to the new item being added to the stack:
```js
setTodos([ ...todos, newTodo]);
listRef.current.lastChild.scrollIntoView();
```

You can for the DOM to update synchronously, which is forced after the code wrapped in `flushSync` executes:
```js
flushSync(() => {
  setTodos([ ...todos, newTodo]);
});
listRef.current.lastChild.scrollIntoView();
```

Keywords: useState

[[react]]