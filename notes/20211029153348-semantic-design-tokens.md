# Semantic design tokens

aka: 'Contextual design tokens'

If your design tokens are named after tints/shades, such as `grey100`, it's easy to change the underlying hex value to perform a wide sweeping change. However, if a single token is used used for more than one semantic need, such as `grey300` representing both disabled text and a menu background colour, it's impossible to change one semantic goal without changing the other.

By introducing an additional abstraction layer above your tints/shades, e.g. `text-disabled` maps to `grey300`, it's possible to change one use without changing the other.
	**It's really about identifying the things that [[20200307101703-easy-to-change|change together]]**.
If a colour used in two places is supposed to be kept in sync, consider if there should be a shared token.

The usual wisdom is to have three layers:
1. Base/primitive tokens: `grey900`
2. Semantic tokens: `color-action-primary`
3. Component tokens: `button-background-primary`

Each tier inherits from the previous - avoiding skipping tiers as much as possible. Each subsequent tier increases contextual precision, but lowers coverage. More tokens increase granularity which in turn increases flexibility, but also increases the maintenance cost.

https://foundation.mozilla.org/en/docs/design/websites/design-tokens/

Making a change affects all the layers that read from it.
- Change the Tier 1 token raw value, and `grey900`, `border-color`, and `input-border` all change.
- Change the Tier 2 `border-color` to reference a different Tier 1 token, and only the Tier 2/3 tokens change.

Tier 3 is really where it gets interesting. As mentioned the more tokens you have, the more maintenance burden you have. As such, a good approach is to only to use the Tier 3 as needed.

Tier 3 allows you to do two different things:
1. Share token values across different components (e.g. Button and ButtonBar both can reference Button-related tokens)
2. Allow you to change styling of components through tokens, rather than CSS.

The former has a few benefits. A good approach is to create private variables and graduate them to Tier 2/3 tokens as they start to become shared. This allows you to only reap the benefits of sharing while lowering the maintenance burden overall.

The latter has more benefits. For one, it can help makes changes 'safer' and more web-agnostic. This is imperative if you're sharing things across different tools, like Figma. Or if you have a multi-platform design system, e.g. iOS + React.
Additionally, it has massive benefits in the space of theming or multi brand. With multiple brands, it's sometimes not possible to change things via CSS. Instead a Tier 3 opens an API for flexibility, bespoke theming. For more information see [[20220822094537-themeable-design-systems]]

If you don't have multi-brand requirements, you can often make do with a more complex Tier 2. By making more specific Tier 2 tokens that reference other Tier 2 tokens, you can share specific semantic needs that need to change together. For example, grouping all of your `input`-related tokens, which read from more generic `surface` tokens that represent all background colours. The lines between the two tiers start to become blurry depending on the use of the token and amount of abstractions (or 'hops'). Once again, what should change together is important - prototyping potential visual changes can help battle test your architecture for change.
	This is what SWAN did to make a more complex Tier 2 that gave us more flexibility. Tier 3 was only really used for outliers or to keep things consistent across similar components (e.g. Button and ButtonBar).

One thing I've found difficult is to know how granular to be. Granularity increases flexibility, but also decreases usability. This is very difficult to manage across an entire token API, and feels more of an art than a science. This is further complicated by Tier 2 often referencing other Tier 2 tokens. Which helps with specificity and control, but can lead to more complexity.

I'm personally still not sure if you should have a consistent token categorisation (e.g. action, input, container) across all token types (e.g. elevation, border-radius), or if the categorisation should be per-token type. The latter approach also informs the token naming, you should but the token type first so the categories can change.

Interesting to note that this is a low-level layer of abstraction. Sometimes abstracting at this level is not the best solution. Instead of making a new token, you may want to abstract higher. For example: a different component API, or a component, or a template that abstracts the idea behind tokens entirely. Given a token for 'Heading':
- could have a token for 'Page Heading'
- could be a component, e.g. PageHeading
- could be part of a Page component
- could not exist entirely

[[20211029152633-design-token-naming]]
[[20220523102023-design-tokens-as-intents]]
[[20220704013140-semantic-design-tokens-dependencies]]
[[20220822094537-themeable-design-systems]]

https://medium.com/@NateBaldwin/component-level-design-tokens-are-they-worth-it-d1ae4c6b19d4

[[abstraction]]
[design]
[[designsystem]]
[[designsystembranding]]
[[designtokens]]