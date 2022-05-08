# Render as you fetch in React

React Suspense is aiming to shift some paradigms in React. There's two main non-suspense render patterns involving fetches.

**Fetch-on-render**
Start fetching after the component has been rendered on screen. Often using a `useEffect` hook. This leads to waterfall-ing issues as fetches are often dependent on other fetches.

**Fetch-then-render**
This essentially groups fetches into a higher component to avoid waterfalling. Before the individual component is rendered, a different component can fetch all the data required for the page. However this blocks renders - we can't render anything until we have _all_ data.

**Render-as-you-fetch**
Previous approaches fetch data before calling `setState`:
1. Start fetching
2. Finish fetching
3. Start rendering

With Suspense, it's possible to flip the last two steps around:
1. Start fetching
2. Start rendering
3. Finish fetching

The aim is to start rendering immediately after starting the network request. This often leads into trying to start fetching _before_ rendering at all. i.e. in a button click to open the page, rather than the page component itself.

After this it goes into the Suspense loop. [[20220328095745-react-suspense-loop]]

[[react]]
[[reactsuspense]]