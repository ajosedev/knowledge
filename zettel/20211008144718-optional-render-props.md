# Conditional render props

Using conditional render props allows for more control in consuming components, but only when it's required. The rest of the time `React.cloneElement` or `children` can be returned instead.

```jsx
return (
    typeof children === 'function'
        ? children(additionalProps)
        : React.cloneElement(children, additionalProps) // or just `children`
)
```

Note: `material-ui` does this for some of their components.

[[components]]
[[react]]
[[reactapi]]