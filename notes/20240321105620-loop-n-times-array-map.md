# Looping n times in JS/React

There's a ton of different ways to do this, but the one I usually go for is:

```jsx
{[...Array(n)].map((_, i) => (
	// do stuff with i
))}
```

[[js]]
[[react]]