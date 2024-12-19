# Subcomponents in a design system

'Subcomponents' isn't a new idea, and effectively is [[20210412143336-compound-components]]. However, this is a common term in the design system space, and crucially don't often need to share state.

> **Subcomponent**: an independently composable UI component with a well-defined API intended for use only within a specific parent component or context.

They are a pattern that aims to offer composition and flexibility. They make the 'uncommon' designs possible, the designs not on the happy path. The user needs a bit more work to get there, but they can still be within the design system rather than bespoke.

Subcomponents can act as a facade, locking down props as needed. For example a `CardImage` component can exist just to restrict the props of the more generic `Image` component. This can help remove footguns, improve the ergonomics, etc.

Subcomponents are often prefixed with a similar name, e.g. `Menu` and `MenuItem`.

Pros:
- Composition/flexibility
- Avoids giving infinite props to a component, which makes them brittle
- Gives more power to the consumer
- Avoids having to build things from scratch when the DS doesn't fulfil the need
- Still keeps things DRY at the end of the day [[20200307105301-dry]]

Most cons are less cons, and more tradeoffs

Cons:
- Risks inconsistency, but realistically you're not going to solve everything. Let consumers do what they want, just make it better
- Requires more implementer work, but also this is the tradeoff you get for customisation
- Create debt, but probably less than going full custom
- Might be hard to re-create in Figma.

https://medium.com/eightshapes-llc/subcomponents-753ce9f6600a

[[20210908151101-object-props-vs-compound-components]]
[[20241121114816-props-vs-subcomponents]]
[[20220801105616-break-out-design-system]]

[[components]]
[[componentapi]]
[[designsystem]]
[[designsystemapi]]