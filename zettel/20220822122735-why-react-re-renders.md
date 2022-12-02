# Why react re-renders

Every re-render in React starts with a state change.

When a component re-renders, it re-renders **all** of its descendants.
	It doesn't go up, it only goes down.

A component will re-render **regardless** of its props changing.
	React doesn't know with 100% certainty if a component depends on state above it, so it will blindly re-render.
	If a component is 'pure', same props = same output, then it ideally wouldn't re-render.

`React.memo` memoises a component to ignore certain re-render requests.
	This way, the component will only re-render if the props change.
	Effectively identifies the component as 'pure'.

By default, all components are impure.
	It can actually be slower to check if the props have changed vs re-rendering the component indiscriminately [[20220801102843-preoptimise-usecallback-usememo]]

https://www.joshwcomeau.com/react/why-react-re-renders/

#todo - what does context do? do all children of a provider re-render, or just consumers?

[[performance]]
[[react]]