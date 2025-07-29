# Ways of passing state from the child to the parent

You often need state higher. Here's a few ways of doing that.

Compound components
	[[20210412143336-compound-components]]
	This includes sharing through both React.cloneElement, and Context.
	In the former, you can pass a callback function automatically, as mentioned below
	In the latter, you can have the child component read from a context.
	Both of these are more helpful when the child can be rendered without the parent, so a callback function is a bit messier.
Callback functions
	Expose a callback function in the child. That way when rendering the child, you can pass some sort of state control through, and trigger it in the child component. This doesn't work as well if you have a compound components API, e.g. you're rendering the parent and the child together.
Render props
	This isn't exactly 1:1 with the premise, but helps you lift state regardless. Often `children` is a bit hard to parse, and using [[20221205104221-render-props-pattern]] can allow you to set state higher and explicitly pass it to the correct place.

https://react.dev/learn/passing-data-deeply-with-context

[[react]]