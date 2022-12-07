# Server Side Rendering (SSR)

>Generate HTML to be rendered on the server in response to a user request

>Server-side rendering (SSR) is one of the oldest methods of rendering web content. SSR generates the full HTML for the page content to be rendered in response to a user request. The content may include data from a datastore or external API.

In CSR [[20221128042243-client-side-rendering]], the HTML returned by the server is just a root div. SSR returns the entire HTML page. Thus there's no round trips for data or templating. Javascript doesn't need to handle any rendering or population on the client, but can still be used for other things, like interactivity.

>With SSR every request is treated independently and will be processed as a new request by the server. Even if the output of two consecutive requests is not very different, the server will process and generate it from scratch. Since the server is common to multiple users, the processing capability is shared by all active users at a given time.

Advantages:
- Better performance than [[20221128042243-client-side-rendering]], including First Contentful Paint (FCP) and Time to Interactive (TTI).
- Less Javascript shipped to the client
- Can be crawled by search engines for better SEO
- Can provide personalised information, as the site is built per-request
- Access to request-based data, such as cookies

Disadvantages:
- Slow TTFB
- By default, can't make a SPA [[20221128105028-spa-mpa]]
- Each page rendered is unique, so most things can't be cached

Using [[20221021122456-isomorphic-js]] frameworks, you can use things like React on both the server and the client. The server compiles HTML for the first render, and then the client uses Javascript to [[20221130103211-hydration|hydrate]] the code on the client.

[[20221110041808-react-server-components]] are almost a follow up to SSR. Rather than generation on the server and hydrating on the client, they actually render on the server.

[[architecture]]
[[infrastructure]]
[[rendering]]