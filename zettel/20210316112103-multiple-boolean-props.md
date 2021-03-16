# Multiple boolean props in a React component

Having multiple boolean props or state is probably a code smell.
If you have variants of a component, e.g. `danger`, `warning`, etc. as multiple props it can lead to some impossible states. Additionally, it makes it harder to type, and easier to fail as it's harder to understand that they are a logical grouping where only one should be active at a time.

```javascript
function CommonButton({
  children,
  onClick = () => {},
  primary,
  warning,
  danger,
  type = 'button',
}) {
  let backgroundColor = '#33a1cc'
  if (primary) backgroundColor = '#17b890'
  if (warning) backgroundColor = '#ffd166'
  if (danger) backgroundColor = '#f0544f'

  return (
    <button onClick={onClick} type={type} style={{ backgroundColor }}>
      {children}
    </button>
  )
}
```

If the user passes multiple variants in the one call, what should happen?
```javascript
<CommonButton danger primary warning>
  Click Me!
</CommonButton>
```

A better solution is to use a single prop that accepts an enum - this makes it easier to not make mistakes, and affords better typing also. It's no longer possible to create an impossible state, and adding new variants in the future is also easier.

```javascript
<CommonButton variant="warning">
  Click Me!
</CommonButton>
```

#react
#smells