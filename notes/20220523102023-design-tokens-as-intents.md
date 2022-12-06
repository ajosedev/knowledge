# Design tokens as intents

Token names should describe an intention, not a value.

This helps answer 'what kind of x' should I put here. You're not looking for a particular colour or style, you should be looking for the *kind* of thing.

This avoids issues with maintenance - it's okay to change the underlying colour as the intent it still the same. Changing your brand from blue to orange doesn't break your `primary-button-color`, but it does break your `blue500` button.

Nathan Curtis calls this 'concepts'.

[[designsystem]]
[[designtokens]]