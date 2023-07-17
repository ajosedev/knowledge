# Semantic design tokens

aka: 'Contextual design tokens'

If your design tokens are named after tints/shades, such as `grey100`, it's easy to change the underlying hex value to perform a wide sweeping change. However, if a single token is used used for more than one consistent use, such as `grey300` representing both disabled text and a menu background colour, it's impossible to change one without changing the other.

By introducing an additional abstraction layer above your tints/shades, e.g. `text--disabled` maps to `grey300`, it's possible to change one use without changing the other.
	**It's really about identifying the things that [[20200307101703-easy-to-change|change together]]**. 
If a colour used in two places is supposed to be kept in sync, consider if there should be a shared token.

Usually there's around three layers:
0. The base HEX, `#000`
1. The reference to your palette, `grey900`
2. The initial intent of the colour, `border-color`
3. The component usage of the colour, `input-border`

Note that tier 3 may not need to exist. Once again, it's about linking things that change together. A 'merged' tier 2 and 3 that offers different intents for different palette colours also can make sense, e.g. `border-color`, and `border-color--bold`, where components use the intent they need. This still keeps components in sync as needed without having to have a separate `border-color` for each component. Instead it's closer to having a `border-color` token for each **type** of component.

A third tier makes a lot more sense for a [[20220822094537-themeable-design-systems]]. Or alternatively, if you want your users to be able to change their values without having to [[20220704125509-design-systems-snowflakes|snowflake]] things or look at the implementation details

If you make a change at a lower level, all levels above it are affected.
- Change the hex, and `grey900`, `border-color`, and `input-border` all change.
- Change `border-color` to reference `blue700`, and only `input-border` changes.

There's value here. If you think all form components might change their border colour in the future, having an abstraction for `input-border` allows them to change without changing other uses of `border-color`.

However this probably can be extended too far and get confusing, do you need separate tokens for menu-bg, card-bg, etc? Don't go overboard.

Interesting to note that this is a low-level layer of abstraction. Sometimes abstracting at this level is not the best solution. Instead of making a new token, you may want to abstract higher. For example: a different component API, or a component, or a template that abstracts the idea behind tokens entirely. Given a token for 'Heading':
- could have a token for 'Page Heading'
- could be a component, e.g. PageHeading
- could be part of a Page component
- could not exist entirely

[[20211029152633-design-token-names]]
[[20220523102023-design-tokens-as-intents]]
[[20220704013140-semantic-design-tokens-dependencies]]
[[20220822094537-themeable-design-systems]]

[[abstraction]]
[design]]
[[designsystem]]
[[designtokens]]