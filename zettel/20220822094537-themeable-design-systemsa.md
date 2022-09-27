# Themeable design systems

Using [[20211029153348-semantic-design-tokens]] and [[20220819043510-design-tokens-abstraction-layers]], it's possible to make a single [[designsystem]] that's consumed by visually different brands.

Ultimately this gives brands the flexibility and identity they need, while you keep your code [[20200307105301-dry]] and more maintainable.

A lot of the power comes from [[designtokens]] at different abstraction layers.

Tier 1: Brand definitions, e.g. `font-family-primary`, `color-brand-target-red`.
Tier 2: High-level application variables, e.g. `border-color-subtle`, `font-family-heading`.
Tier 3: Component-specific variables, e.g. `button-font-family`, `button-border-width`.

Each tier maps to the tier above it. The first two are considered the 'theme layer', and the third tier is consumed by the DS component library.

Tier 3 declarations shouldn't often change, meaning there's not much work updating the components even if they're used by multiple brands. The work, cstomisation, and separation. comes through changing the tokens in higher tiers.

Note that 3 tiers may not be necessary. Each tier adds more maintenance and can slow you down. Consider adding them over time to avoid slowing down the speed of which you can build new components.

This can be used for more than a multi-brand design system:
- Sub-brands
- White-labelling
- Design language generations
- Light/dark themes
- Campaigns
- Marketing vs product
- etc

https://bradfrost.com/blog/post/creating-themeable-design-systems/
https://bradfrost.com/blog/post/the-many-faces-of-themeable-design-systems/

[[designsystem]]
[[designtokens]]