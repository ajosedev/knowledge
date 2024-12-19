# Client Side Rendering (CSR)

>Render your application's UI on the client

>In Client-Side Rendering (CSR) only the barebones HTML container for a page is rendered by the server. The logic, data fetching, templating and routing required to display content on the page is handled by JavaScript code that executes in the browser/client.

The HTML returned by the server is just a single root div tag with no content. On the client, Javascript populates the HTML, etc.

CSR (and other rendering techniques) enable creating an SPA [[20221128105028-spa-mpa]].

Advantages:
- Allows for client side navigation
- If the entire web application is loaded on the first request, changing a page doesn't need to hit the server at all
- Thus routing can appear faster

Disadvantages:
- Bundle size would usually grow slowly over time, which increases the [[20221219125527-web-vitals#First Contentful Paint (FCP)|FCP]] and [[20221219125527-web-vitals#Time to Interactive (TTI)|TTI]] of the page
- CSR doesn't often get crawled correctly, leading to poor SEO
- Performance is usually subpar compared to other techniques
- Data fetching usually involves render-fetch waterfalls [[20220328094742-render-as-you-fetch]]

There are techniques to improve [[performance]], such as [[20220912112727-lazy-loading]], [[20220911060950-code-splitting]], etc.

[[architecture]]
[[deployment]]
[[infrastructure]]
[[rendering]]