# Automatic Batching in React

React 18 introduced Automatic Batching. Multiple state updates are batched into a single re-render for better performance. Previously only updates inside React event handlers were batched.

To opt out of automatic batching, you can call `ReactDOM.flushSync()`.

[[react]]