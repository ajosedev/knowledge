# Don't default a boolean prop to true

This seems to be a pretty common convention.

Avoid defaulting a boolean prop to true - if needed, flip the prop and default it to false instead. A `true` default means that you have to explicitly pass `false`, where as you can implicitly pass `true` in JSX.

```jsx
// Multiple uploads is the default
allowMultiple={false} // bit ugly

allowSingle // more convenient
```

[[componentapi]]
[[react]]
[[reactapi]]