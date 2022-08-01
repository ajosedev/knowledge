# Sometimes you don't need useEffect

It's easy to reach for a `useEffect` to help with your code, but it's often the wrong choice. Some tips to avoid unnecessary useEffects are:
- If you can calculate something during render, you don’t need an Effect.
- To cache expensive calculations, add `useMemo` instead of `useEffect`.
- To reset the state of an entire component tree, pass a different `key` to it.
- To reset a particular bit of state in response to a prop change, set it during rendering.
- Code that needs to run because a component was _displayed_ should be in Effects, the rest should be in events.
- If you need to update the state of several components, it’s better to do it during a single event.
- Whenever you try to synchronize state variables in different components, consider lifting state up.
- You can fetch data with Effects, but you need to implement cleanup to avoid race conditions.

https://beta.reactjs.org/learn/you-might-not-need-an-effect

[[react]]