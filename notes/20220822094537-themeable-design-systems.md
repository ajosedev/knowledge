# Themeable design systems

Using [[20211029153348-semantic-design-tokens]], it's possible to make a single [[designsystem]] that's consumed by visually different brands. Ultimately this gives brands the flexibility and identity they need, while you keep your code [[20200307105301-dry]] and more maintainable.

A lot of the power comes from [[designtokens]] at different abstraction layers.

Tier 1: Brand definitions, e.g. `font-family-primary`, `color-brand-target-red`.
Tier 2: High-level application variables, e.g. `border-color-subtle`, `font-family-heading`.
Tier 3: Component-specific variables, e.g. `button-font-family`, `button-border-width`.

Each tier maps to the tier above it. The first two are considered the 'theme layer', and the third tier is consumed by the DS component library. Each tier adds more maintenance and can slow you down. Consider adding them over time to avoid slowing down the speed of which you can build new components.

The main benefit of having tokens in Tier 3 is to allow even more customisation across themes. The groupings used in your Tier 2 can be broken. For example, if Buttons and Callouts are linked in a Tier 2, having Tier 3 tokens allows consumers to break that grouping and have the border-radius of the two components differ. Or alternatively, allowing this specific token to be referenced elsewhere - e.g. something that wants to use the button colour, and be in sync with it.
Only once you want to break those in-built links from the component to Tier 2 (or need more customisation) does a Tier 3 become necessary.
	For example,
		in Theme A: `button-font-family` is linked to `font-family-body`
		in Theme B: `button-font-family` is linked to `font-family-heading`
	This avoids button having a hard-coded reference to `font-family-body`, and allows for more customisation.

Personally, I don't think a Tier 3 often needs to exist, or if it does, it's a blurry extension to Tier 2. A component can reference a Tier 2 token without needing to make a Tier 3 token to self-reference. Even if that means a Tier 2 token references another Tier 2 token. [[20211029153348-semantic-design-tokens]]

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
[[202310041150420-design-system-themes-brands-modes]]

[[abstraction]]
[[designsystem]]
[[designsystembranding]]
[[designtokens]]
