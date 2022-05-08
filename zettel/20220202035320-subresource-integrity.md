# Subresource Integrity

>**Subresource Integrity** (SRI) is a security feature that enables browsers to verify that resources they fetch (for example, from a [CDN](https://developer.mozilla.org/en-US/docs/Glossary/CDN)) are delivered without unexpected manipulation. It works by allowing you to provide a cryptographic hash that a fetched resource must match.

```html
<script src="https://example.com/example-framework.js"
        integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
        crossorigin="anonymous"></script>
```

Before executing the script or applying a stylesheet, the browser will compare the script/stylesheet to the expected hash in the `integrity` value. If these values don't match, the browser will refused to execute the script or apply the stylesheet, and instead return a network error.

https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity

[[browsers]]
[[html]]
[[security]]