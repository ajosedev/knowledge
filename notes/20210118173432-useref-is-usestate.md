# useRef is essentially useState

Under the hood, `useRef` is essentially `useState({current: initialValue })[0]` 

It's nothing special, just a long-lived mutable variable.

[[react]]