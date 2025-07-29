# JS events + hydration

A weird quirk of React in SSR ([[20221207104517-react-ssr]]) is that HTML events that fire before hydration won't re-fire once the code is hydrated. This ultimately leads to a strange race condition where certain things are _sometimes_ fired.

An example is `onLoad` on an `img` element. This can be used to detect when an image loads. However if the image finishes loading on a page before hydration, the event isn't called, as the event handler isn't properly attached yet. Since the event has already happened, it will just never trigger.
e.g. a slow image will call `onLoad`, but a fast image (or a cached image) will not.

https://github.com/facebook/react/issues/12641
https://github.com/facebook/react/issues/15446
https://stackoverflow.com/questions/39777833/image-onload-event-in-isomorphic-universal-react-register-event-after-image-is

[[20221207104517-react-ssr]]
[[20221130103211-hydration]]

[[html]]
[[react]]
[[rendering]]