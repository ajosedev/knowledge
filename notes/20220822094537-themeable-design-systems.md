# Themeable design systems

Using [[20211029153348-semantic-design-tokens]] and [[20211029153348-semantic-design-tokens]], it's possible to make a single [[designsystem]] that's consumed by visually different brands.

Ultimately this gives brands the flexibility and identity they need, while you keep your code [[20200307105301-dry]] and more maintainable.

A lot of the power comes from [[designtokens]] at different abstraction layers.

Tier 1: Brand definitions, e.g. `font-family-primary`, `color-brand-target-red`.
Tier 2: High-level application variables, e.g. `border-color-subtle`, `font-family-heading`.
Tier 3: Component-specific variables, e.g. `button-font-family`, `button-border-width`.

Each tier maps to the tier above it. The first two are considered the 'theme layer', and the third tier is consumed by the DS component library. This can mean that if you only have a single 'theme' for your design system, a Tier 3 is not perhaps necessary. Each tier adds more maintenance and can slow you down. Consider adding them over time to avoid slowing down the speed of which you can build new components.

The main benefit of a Tier 3 is to allow more customisation across themes. In a single-theme design system, you can abstract all the things that change together in Tier 2. Only once you want to break those links (or need more customisation) does a Tier 3 become necessary.
	For example,
		in Theme A: `button-font-family` is linked to `font-family-body`
		in Theme B: `button-font-family` is linked to `font-family-heading`
	Both of the Tier 2 values map to different fonts, but what the component uses is also different.
Having a Tier 3 allows you to change these values using design tokens (often CSS variables), which means you don't have to modify the implementation.

Additionally, this third tier can have a lot of nuance. Something like [Adobe Spectrum](https://medium.com/@NateBaldwin/component-level-design-tokens-are-they-worth-it-d1ae4c6b19d4) used fine-grained tokens - `spectrum-button-m-warning-quiet-overbackground-textonly-focus-ring-animation-duration`. You could pull this back as many steps as appropriate, e.g. `primary-action-background-color` still provides value and granularity, and can be used across multiple components.

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

[[20221025093009-multi-brand-design-systems]]

[[designsystem]]
[[designsystembranding]]
[[designtokens]]
