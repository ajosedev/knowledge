# Typeof window checks

Since Javascript can run on the browser and the server, e.g. [[20221021122456-isomorphic-js]], sometimes code needs to check to see where you are.

This is usually done through a `typeof window === "undefined"` check. If it's true, you're on the server. Otherwise, you're in the browser.

[[deno]] actually supports `window`, making this check break. Instead, use a `typeof document` check. This works in both node and Deno.

[[browsers]]
[[js]]
[[node]]