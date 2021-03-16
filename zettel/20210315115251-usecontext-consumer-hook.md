# Custom consumer hook for useContext

When working with context, it's helpful to create a custom consumer hook rather than the default `React.useContext`. This helps ensure you are consuming the context from within a provider.

```jsx
function useCount() {
    const context = React.useContext(CountContext)
    
    if (!context) {
        throw new Error('useCount must be rendered within the CountProvider')
    }
    
    return context;
}
```

#react