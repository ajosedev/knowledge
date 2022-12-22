# Edge Side Includes

Edge Side Includes (ESI) is an XML-based markup language that allows pages to be composed and rendered at the [[20221107042816-network-edge]].

ESI tags are placed within the HTML, and then the ESI processor retrieves the URL and renders it as part of a page.

```html
<esi:include src="https://yourwebsite.com/1.html" alt="https://backup.yourwebsite.com/2.html" onerror="continue"/>
```

Since the processing is performed at the edge, it lets you mix static and dynamic content away from the client. A [[20221128051011-static-rendering]] page can include a reference to a dynamic ESI, which is then populated at the edge. This lets you still cache the static content, and only generate what's needed, unlike Server Side Includes (SSI). Even then, the dynamic content could be partially cached, just with a shorter timer. Effectively this gives you dynamic pages with the performance of static pages.

The major downside of ESI is that the client still doesn't receive any data until all the content is assembled. There's a high [[20221219125527-web-metrics#Time to First Byte (TTFB)|TTFB]].

An alternative approach is to use Client Side Includes (CSI) to assemble on the client. However this involves more roundtrips to the servers, and can't take advantage of strategies such as caching. This also relies on Javascript.

[[20221107042513-edge-computing]]

[[architecture]]
[[microfrontends]]
[[rendering]]