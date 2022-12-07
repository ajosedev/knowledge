# Custom consumer hook for useContext

When working with React Context, it's helpful to create a custom consumer hook rather than the default `React.useContext`. This helps ensure you are consuming the context from within a provider.

```jsx
function useCount() {
    const context = React.useContext(CountContext)
    
    if (typeof context === undefined) {
        throw new Error('useCount must be rendered within the CountProvider')
    }
    
    return context;
}
```

It's important to note how this works with the default value provided to `React.createContext`. Assuming you don't have a provider in your tree:
```jsx
// No value exists in context, so an error will be thrown by our custom useCount hook
const CountContext = React.createContext();

// A default value is set. The error will never be thrown as there's always a value.
const CountContext = React.createContext({});
```

That being said, passing a default value is helpful for testing components, as you don't need to wrap a provider around them.

https://kentcdodds.com/blog/how-to-use-react-context-effectively

[[react]]
[[reacthooks]]