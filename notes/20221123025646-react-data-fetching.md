# Data Fetching in React

Data fetching in React is all about the render cycle. Ideally, you want to avoid render-fetch waterfalls, where you only start fetching after the component renders. This leads to long fetch times, and many requests spawning from different components.

There are different ways to avoid this, such as:
- [[20221110041808-react-server-components]]
- [[20220912120502-server-side-rendering]] (sort of)
- Remix etc loaders
- Caching

Sometimes it's better to request the same data at a higher level in multiple places, and rely on caching to avoid duplicated fetches.

Generally fetching the data as high up as possible leads to the best results, as it avoids fetches happening late in the process in lower level components.

[[20220328094742-render-as-you-fetch]]

[[architecture]]
[[infrastructure]]
[[networking]]
[[react]]
[[rendering]]