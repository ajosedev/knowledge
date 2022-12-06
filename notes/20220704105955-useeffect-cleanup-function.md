# useEffect's cleanup function

The function returned from a `useEffect` is known as its 'cleanup function'. This will always run when the component unmounts.

However, effects run on every render, so the cleanup will also clean up effects from the previous render before running the effects again.

This means that when using `useEffect` with a meaningful dependency array, the cleanup function is executed **whenever the dependencies change** also.

```jsx
useEffect(() => {
  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  return () => {
    ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  };
}, [props.friend.id]); // Only re-subscribe if props.friend.id changes
```

[[20220815044638-useeffect]]

[[react]]
[[reacthooks]]