# Props vs Subcomponents

Similar to [[20210908151101-object-props-vs-compound-components]], this tradeoff is often on a scale of [[20210908155508-flexibility-components]].

Sometimes though you don't need complicated object props, you're just dealing with simple props (strings, booleans) vs subcomponents. This tradeoff is usually a little bit simpler.

## Props
- Decrease flexibility at the benefit of increasing consistency
- Often the simplest API
- Allows easier maintenance as the prop can be updated to do different things
- Can get difficult when props are more complex

## Subcomponents
- Allows for more flexibility in layout and composition
- Useful for when the subcomponent itself needs flexibility or is complex
	- e.g. a CardImage which has different sizes
- Allows users to only use the required subcomponents for what they are creating
- More difficult to maintain as there is more variance

[[componentapi]]
[[components]]
[[designsystem]]
[[designsystemapi]]
[[designpatterns]]