#todo 

Why does `img` have a hard time re-rendering?
Seen multiple cases where you change the `alt` or `src` on the `img` (I think it's usually within a `map`) and the image doesn't properly re-render.

Leaves the props stale. Perhaps something to do with caching, or it being a replaced element?

The fix is usually applying a `key` somewhere to force it to re-render. Which probably means this is only an issue in arrays.
Make a new doc about `key` in React [[20220912120030-react-reconciliation]]

Need a repro with a `map` and changing the `alt` on the `img`