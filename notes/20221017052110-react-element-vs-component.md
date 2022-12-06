# Passing a React Element vs Component as a prop

When passing React components around, passing an Element can be nicer than passing a Component. This is what react-router opted to do in v6.

```jsx
// React Component
<GodComponent component={Profile} />

// React Element
<GodComponent element={<Profile />} />
```

Passing a React Element has the major advantage of allowing the user to pass props directly to the element, rather than having to pass them through the 'parent' component as additional props.

There are some downsides - how do you pass information from GodComponent to the React Element and act on it at this level? It may not be possible, but an alternate solution is to use hooks in the element to retrieve this data if necessary.

[[20220509042212-radix-as-child]]

[[react]]
[[reactapi]]