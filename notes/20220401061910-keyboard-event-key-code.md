# KeyboardEvent - key or code

https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent

Which is better to use: `.key` or `.code`?

`.key` returns the logical meaning of the pressed key. For instance, the numpad-8 key will return either `"ArrowUp"` or `"8"`. 

`.code` returns the physical key being pressed. For instance, `"Numpad8"` is always returned, regardless of NumLock status.

Most applications will use `.key` rather than `.code`. If you're interested in the physical location of the key (e.g. WASD), use `.code`.

[[html]]
[[js]]