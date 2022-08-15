# useEffect vs useLayoutEffect

Use `useLayoutEffect` if the side effect that you are performing makes an observable change to the DOM that will require the browser to paint that update you've made.

Otherwise, use `useEffect`

—

For some more context, `componentDidMount` would render twice before painting once, in order to stop a flicker in the browser if the DOM changes. `useEffect` also runs after mount, but it runs after the first paint. `useLayoutEffect` can help stop a flicker when setting state synchronously.

[[20220815044638-useeffect]]

[[react]]
[[reacthooks]]