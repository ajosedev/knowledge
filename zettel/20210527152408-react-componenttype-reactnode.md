# `ReactNode` vs `ComponentType`

What's the difference between these two type signatures?

`ReactNode` accepts pretty much anything. This is what you usually type for the `children` prop. It acceps a React element, strings, undefined, null, etc. In this situation, the component is rendered at the call site:

```javascript
<Button icon={<IconComponent />} />

return <button>{icon}</button>
```

`ComponentType` is a bit mroe restricted, it takes either a class or function component. This type is helpful when you want to restrict how the component is rendered as you won't be able to pass props to it at the call site. In this situation, the component is rendered by what accepts the prop:

```javascript
<Button icon={IconComponent} />

return <button><IconComponent /></button>
```

[[react]]
[[ts]]