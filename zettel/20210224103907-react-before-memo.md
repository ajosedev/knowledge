# Before reaching for React useMemo

`useMemo` is helpful and can provide performance benefits when used properly. However, it comes with its own downsides and annoyances. TODO - separate useMemo doc

Before reaching for it, there are some other strategies you can use. They all revolve around splitting up the parts that change and the parts that don't change.

###  Move state down

Move the state that changes down closer to the component(s) that use it, avoiding re-renders on components that don't care about that state.

```js
export default function App() {
    let [color, setColor] = useState('red');
    return (
        <div>
            <input value={color} onChange={(e) => setColor(e.target.value)} />
            <p style={{ color }}>Hello, world!</p>
            <ExpensiveTree />
        </div>
      );
}
```

In this example, state for `color` can be moved away from `ExpensiveTree` as it doesn't use it.

### Lift content up

If extracting the state along with the components that rely on it isn't an option, it may be possible to move the content or components up, and rely on React not re-rendering props that don't change. If a prop is referentially equal between renders, React can optimise and avoid ignore that subtree - which will happen even if the prop is a component.

```js
export default function App() {
  return (
    <ColorPicker>
        <p>Hello, world!</p>
        <ExpensiveTree />
    </ColorPicker>
  );
}

function ColorPicker({ children }) {
    let [color, setColor] = useState("red");
    
    return (
        <div style={{ color }}>
          <input value={color} onChange={(e) => setColor(e.target.value)} />
          {children}
        </div>
    );
}
```

This works with `props.children` as in the example, but also works for a named prop. `<Component logger={<Logger />} />`

#react