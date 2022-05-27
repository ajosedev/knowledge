# Back forward cache
Or bfcache

>Back/forward cache (or bfcache) is a browser optimization that enables instant back and forward navigation. It significantly improves the browsing experience for users—especially those with slower networks or devices.

`bfcache` is automatic, but you can observe the page transition events with `pageshow` and `pagehide`.

To optimise your page for bfcache:
- never use the `unload` event
- avoid using `beforeunload` unless absolutely necessary
- avoid using `window.opener` without `rel="noopener"`
- close open connections before the user navigates away
- update stale or sensitive data after bfcache restore
- test to ensure your pages are cachable

https://web.dev/bfcache

[[browsers]]