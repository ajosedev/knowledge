# Snowflakes vs modifications

The term '[[20220704125509-design-systems-snowflakes|snowflakes]]' can be a little overloaded. Personally, I think there's a distinction between two different things:

1. A one-off component that fits a need, that isn't currently catered for by the design system. Often exist in a domain the design system doesn't focus on as much, or needed for a single, particular use case. This is closer to a new component.
2. A modification of an existing component that changes the visual style (or behaviour) of an existing design system component. Often done through [[css]] or some other API layer. This is closer to a new variant for a component.

IMO, the first is a **snowflake**, and the latter is a **modification** (needs a better name). Alternatively, the latter is the a design system component that has been **snowflaked**.

*Maybe deviation is a better word?*

[[designsystem]]