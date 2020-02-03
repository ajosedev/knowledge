# componentDidMount vs useEffect(fn, [])

When setting state in `componentDidMount`, React would render twice before painting once, in order to stop a flicker in the browser if the DOM changes. `useEffect` also runs after mount, but it runs after the first paint. If the desired behaviour is to stop a flicker when setting state synchronously, use `useLayoutEffect`.
