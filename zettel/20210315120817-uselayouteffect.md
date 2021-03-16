# useEffect vs useLayoutEffect

Use `useLayoutEffect` if the side effect that you are performing makes an observable change to the DOM that will require the browser to paint that update you've made.

Otherwise, use `useEffect`

#react