# `dispatch` and `setState` has a stable function identity

>React guarantees that `dispatch` function identity is stable and won’t change on re-renders. This is why it’s safe to omit from the `useEffect` or `useCallback` dependency list.

This is also true for `setState`.

https://reactjs.org/docs/hooks-faq.html#how-to-avoid-passing-callbacks-down

[[react]]
[[reacthooks]]