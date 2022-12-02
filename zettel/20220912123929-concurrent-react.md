# Concurrent rendering in React

Concurrent rendering is a mechanism that enables React to prepare multiple versions of UI at the same time. Previously, synchronous rendering was blocking. Once started, nothing could interrupt it until it's rendered on screen. With concurrent rendering this is not always the case.

Rendering may get paused, or even abandoned altogether. React guarantees that the UI will appear consistent even if a render is interrupted. It waits to perform DOM mutations until the end, once the entire tree has been evaluated. [[20220912120030-react-reconciliation]]

This allows React to prepare new screens without blocking the main thread. Now, the UI can respond immediately even if it's in the middle of a large rendering task, creating a better user experience.

React can also now remove sections of the UI and re-add them while reusing the previous state. A new component called `<Offscreen>` will allow you to prepare UI in the background and show it to the user on cue.

New features in React such as Suspense, transitions, and streaming server rendering are all built to use concurrent rendering. As of React 18, concurrent rendering is only enabled in the parts of your app that uses new features.

https://reactjs.org/blog/2022/03/29/react-v18.html

[[20220912122714-react-rendering-phases]]
[[20221130102846-progressive-hydration]]

[[react]]