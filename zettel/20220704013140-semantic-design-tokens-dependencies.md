# Making semantic design tokens for dependencies

Semantic tokens provide more value as more things depend on said token. For example, a semantic token for 'card padding' is helpful for both the Card component, and the internal Button that needs to be offset by the same amount.

This is essentially [[20200307105301-dry]] code. Once 2+ places rely on the same value, it makes sense to extract that into a variable.

[[designsystem]]
[[designtokens]]