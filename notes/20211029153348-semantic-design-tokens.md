# Semantic design tokens

aka: 'Contextual design tokens'

If your design tokens are named after tints/shades, such as `grey100`, it's easy to change the underlying hex value to perform a wide sweeping change. However, if a single token is used used for more than one consistent use, such as `grey300` representing both disabled text and a menu background colour, it's impossible to change one without changing the other.

By introducing an additional abstraction layer above your tints/shades, e.g. `text--disabled` maps to `grey300`, it's possible to change one use without changing the other.
	**It's really about identifying the things that [[20200307101703-easy-to-change|change together]]**.
If a colour used in two places is supposed to be kept in sync, consider if there should be a shared token.

The usual wisdom is to have three layers:
1. Base/primitive tokens: `grey900`
2. Semantic tokens: `color-action-primary`
3. Component tokens: `button-background-primary`

Each tier inherits from the previous, avoiding skipping tiers as much as possible. Each subsequent tier increases contextual precision, but lowers coverage. This can very quickly get out of hand, and make your design system harder to learn and use.

https://foundation.mozilla.org/en/docs/design/websites/design-tokens/

If you make a change at a lower level, all levels above it are affected.
- Change the hex, and `grey900`, `border-color`, and `input-border` all change.
- Change `border-color` to reference `blue700`, and only `input-border` changes.

Tier 3 is really where it gets interesting. A good approach is to only to use the Tier 3 as needed. Usually through a private-first approach that graduates variables to tokens (maybe even Tier 2 tokens) once it matches the [[20211115112656-rule-of-three]]. Even without it, the components still reference the Tier 2 - they're just not making an additional token to self-reference. Although the tier allows for extra flexibility, it incurs more maintenance costs and is sometimes unnecessary specificity. Once again, it goes back to what should change together.

That being said, the extra flexibility is useful for aiding in changes, and is in general 'safer'. e.g. if two components need to start using the same token in the future, having separate Tier 3 tokens that can be later consolidated is helpful. You can make changes only to tokens to get the visual update you need. Granted, this can also be done without the Tier 3 token - you'd just be changing CSS more directly, rather than tokens. This strategy (updating CSS directly) doesn't work as easily if you have a multi-platform component system, e.g. iOS components + React components, or you want to automate parity to something like Figma.

It also depends on how specific your Tier 2 is. If it's more abstract (e.g. `surface-light`), having a more specific token category around `input` can make sense in a pseudo third-tier, as they may change independently from `surface-light`. The lines between the two tiers start to become blurry depending on the use of the token and amount of abstractions (or 'hops'). Once again, what should change together is important - prototyping potential visual changes can help battle test your architecture for change.

Additionally, Tier 3 can have a lot of nuance. Something like [Adobe Spectrum](https://medium.com/@NateBaldwin/component-level-design-tokens-are-they-worth-it-d1ae4c6b19d4) used fine-grained tokens - `spectrum-button-m-warning-quiet-overbackground-textonly-focus-ring-animation-duration`. You could pull this back as many steps as appropriate, e.g. `primary-action-background-color` still provides value and granularity, and can be used across multiple components. This latter approach can be considered a Tier 2 or Tier 3 depending on your outlook and existing hierarchy. For example, Material only creates a Tier 3 when the design choice applies to multiple components:
> While some component style choices won't be expressed as a token, but a token should be used whenever a design choice applies to multiple components with similar uses.

A Tier 3 also makes a lot more sense when you want a really customisable theming layer as mentioned in [[20220822094537-themeable-design-systems]]. Or alternatively, if you want to expose an API for users to be able to change their values without having to [[20220704125509-design-systems-snowflakes|snowflake]] things or look at the implementation details. However this can lead to maintenance issues as many more things are public.

One thing I've found difficult is to know how granular to be. Granularity increases flexibility, but also decreases usability. This is very difficult to manage across an entire token API, and feels more of an art than a science.

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
[design]]
[[designsystem]]
[[designtokens]]