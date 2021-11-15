# Latest ref pattern in React

This pattern allows you to keep a value constantly up to date, without triggering re-renders. Rather than just using the value directly, placing it inside of a `useRef` means that the ref won't trigger the dependency array of a `useEffect`.

TODO - I think this is the wrong takeaway.
Update:
`callbackRef` exists outside of the closure. Which means when this component re-renders, any existing functions will be referencing the correct props (at the time), where as this latest ref will be current. Meaning an async function that references `callback` asyncronously will receive the one at time of call, anything that references `callbackRef` will get whatever it's updated to right now.

```js
const callbackRef = React.useRef(callback)
React.useLayoutEffect(() => {
  callbackRef.current = callback
})

// 🤷‍♂️ doesn't make a difference whether you include the ref or not.
React.useEffect(() => { callbackRef() }, [])
```

https://epicreact.dev/the-latest-ref-pattern-in-react/

[[react]]

Different post — (TODO)
With functional components, React creates new functions on every render, which have the current props 'trapped' inside of them (in a closure). This means that if a function is still running when a prop updates (e.g. an async function), it will act upon the prop value at the time the async function was _called_ rather than what it is when it _returns_. This is because the older function still has access to the props it was called with, and the new function is disconnected from that.
In class components, this was possible by destructuring values into their own variables at the start of functions, but that was a workaround to the default. Now, the default has changed.
https://epicreact.dev/how-react-uses-closures-to-avoid-bugs/

TODO - what is a closure?
https://whatthefork.is/closure
https://javascript.info/closure
