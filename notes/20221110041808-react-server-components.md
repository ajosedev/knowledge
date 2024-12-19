# React Server Components

#todo https://www.youtube.com/watch?v=36uY-c0E_EQ & https://www.joshwcomeau.com/react/server-components/

>Server Components compliment SSR, rendering to an intermediate abstraction without needing to add to the JavaScript bundle

React Server Components (RSC) are still experimental. They are component that fetch data and render content on the server. Client Components still exist and render on the client, which are necessary for some things. Client Components can render with [[20220912120502-server-side-rendering]], but that does not make them a Server Component.

You can interleave Server and Client Components in your application, and behind the scenes, React will seamlessly merge the work of both environments. Note that it's still possible to share data and props between Server and Client components.

By rendering on the server, you get a fair few benefits:
- Server-only code that has no impact on bundle size and reduces bundle sizes
- Easier access to private server-side data sources
- Streaming rendering and progressive hydration
- Performance benefits similar to SSR
- Can cache the React runtime on the server

Client Components are still necessary for some uses:
- Interactivity
- Event listeners
- Browser-only APIs
- etc

Server components also fetch data on the server, meaning:
- They have direct access to backend data resources
- Can easily request sensitive data entirely on the server
- Data fetching can be closer to your data source
- Reduce client-server waterfalls
Out of the box, React Server Components are _also_ a **render-fetch waterfall**. Because fetching is done inside of components, your app doesn't know what to fetch until a component renders.
[[20220328094742-render-as-you-fetch]]

Note that as of Nov 2022, Next is pushing React Server Components, and Remix is pushing its own loader style. Hydrogen (by Spotify) is switching from RSC to Remix style data fetching.

https://remix.run/blog/react-server-components

[[architecture]]
[[infrastructure]]
[[react]]
[[rendering]]