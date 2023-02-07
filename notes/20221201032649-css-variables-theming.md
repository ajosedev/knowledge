# CSS variables for theming

CSS Variables are a great way of implementing themes, even when you have CSS-in-JS available. Most theming implementations in standard CSS-in-JS libraries involve using [[react]] Context. This isn't as performant as a browser native solution like CSS variables.

The implementation can be pretty simple. Just set a data-attribute somewhere high up on the tree, and set/read variables through that.

```css
body[data-theme='light'] {
  --colors-primary: deeppink;
  --colors-background: white;
}
body[data-theme='dark'] {
  --colors-primary: lightpink;
  --colors-background: black;
}
```

```jsx
function ThemeToggler() {
  const [theme, setTheme] = React.useState('light')
  const nextTheme = theme === 'light' ? 'dark' : 'light'
  React.useEffect(() => {
    document.body.dataset.theme = theme
  }, [theme])
  return (
    <button onClick={() => setTheme(nextTheme)}>
      Change to {nextTheme} mode
    </button>
  )
}
```

The variables can still be used in CSS-in-JS too:
```jsx
const PrimaryText = styled.div({
  padding: 20,
  color: 'var(--colors-primary)',
  backgroundColor: 'var(--colors-background)',
})
```

[[api]]
[[css]]
[[cssinjs]]