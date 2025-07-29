# useDeferredValue

`useDeferredValue` lets you defer updating a part of the UI.
It stores a `value` of any type that will return the old value on the first re-render, and the new value on a re-render.

An example of use is for search queries. The results of searching for `a` can be deferred so it can continue to be displayed while the user modifies their search to `ab`.

Optionally an `initialValue` can be passed to be used during the initial render of the component.

It's made to be used with something [[reactsuspense]].

https://react.dev/reference/react/useDeferredValue

[[react]]
[[reacthooks]]