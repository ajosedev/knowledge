# Static Rendering with dynamic content

Most of the benefits of [[20221128051011-static-rendering]], but with an allowance for dynamic content. Works well when the data needs to be updated on every request.

The initial static render will render a skeleton or placeholder for the dynamic data. Then after the page load, the browser makes another request to the server to fetch the data. Finally, this is populated on the client.

[[architecture]]
[[infrastructure]]
[[rendering]]