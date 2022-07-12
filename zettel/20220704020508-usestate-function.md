# useState function

If the new state is computed using the previous state, you can pass a function to `setState`. The function will receive the previous value, and return an updated value.

```jsx
setCount(count => count + 1);
```

Remember that if your state value is an object, the setState hook doesn't merge objects (unlike the older `setState`). You have to do that manually:

```jsx
const [state, setState] = useState({});
setState(prevState => {
  // Object.assign would also work
  return {...prevState, ...updatedValues};
});
```

https://reactjs.org/docs/hooks-reference.html#functional-updates

[[react]]