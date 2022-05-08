# Use case for template literal types in Typescript

A use case with reasoning for [[20210816125035-template-literal-types-ts]]

Sometimes the API you want needs to be restrictive. For example, only allow a certain combination of options, rather than each individual option composing together. This is somewhat similar to [[20220125105432-impossible-states|impossible states]], but from the POV of wanting to restrict outputs to uphold a standard.

A solution for this could be template literal types.
For example, exposing a singular `shadow` prop rather than individual options for `shadowColor`, `shadowOpacity`, etc. as only light-coloured shadows should have a higher opacity.

![[Template Literal Types.png]]

https://mobile.twitter.com/jakemoxey/status/1481897996791218179

[[designsystem]]
[[ts]]