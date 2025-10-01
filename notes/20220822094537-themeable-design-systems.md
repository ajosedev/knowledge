# Themeable design systems

Using [[20211029153348-semantic-design-tokens]], it's possible to make a single [[designsystem]] that's consumed by visually different brands. Ultimately this gives brands the flexibility and identity they need, while you keep your code [[20200307105301-dry]] and more maintainable.

A Tier 3 is not always necessary, but it becomes a lot more important once you get into the realm of theming, multi brand design systems, whitelabelling, etc.

The main benefit of having tokens in Tier 3 is to allow even more customisation across themes. **Users gain the power to change component styling WITHOUT writing CSS**. Effectively you're creating a powerful theming API based off design tokens. With only one theme, components point directly to Tier 2 tokens. You can change these Tier 2 token values, but you can't change how individual components point to different tokens.

This makes a 'link' between components based on what Tier 2 tokens they reference.

For example - using just Tier 2 tokens:
```scss
.card {
	background-color: $brand-bg-container;
}

.banner {
	background-color: $brand-bg-container;
}
```

It's possible to change `brand-bg-container` across brands, but ultimately the Card and Banner must share the same colour, they are linked.

Using Tier 3 tokens, you can break that link:
```scss
.card {
	$comp-card-bg: $brand-bg-container;
	background-color: $comp-card-bg;
	font-family: $brand-font-family;
}

.banner {
	$comp-banner-bg: $brand-bg-container;
	background-color: $comp-banner-bg;
	font-family: $brand-font-family;
}

```

This still resolves to the same colour in the default theme, but it crucially doesn't have to. Now if a brand wants to separate them, they could change the Tier 3 tokens (e.g. `comp-banner-bg`) to separate the link to `brand-bg-container`. This is often not necessary if you have a single brand, and may not even be necessary if you have multiple brands. You have the ability to create an intentional API of Tier 3 tokens, depending on the amount of change you need. In the above example, you can't break the `font-family` link as the Tier 3 tokens don't exist.
	**The API is the Tier 3 tokens themselves. The token keys (not their values) represent levers that can be changed per-brand.**

Less importantly, but still usefully, these keys can also be used as values, e.g. users can create a custom Card component that references the Tier 3 tokens that Card uses.

 This API does take a lot of work to support, but it's a good tool to remove [[20230731113037-snowflakes-vs-modifications]] and share 'bones' of components.

Depending on the amount of customisation you need, you can get away with just changing the values in Tier 1 and 2. The Tier 3 tokens just give you more fine-grained control, as required.

Note that I think for a themeable system to work, your Tier 1 needs to start introducing some semantics around brand. e.g. if you use a lot of blues for your brand, that should maybe be named your `brand` palette. Then other things are more neutral, like greys, or even reds (which are often used for errors). Alternate themes can then change the brand colour as needed.

This can be used for more than a multi-brand design system. Each of these are a different level of theming, and change different tiers as needed:
- Sub-brands: core + brand-theme + sub-brand-theme
- White-labelling: core + brand-theme + white-label-theme
- Design language generations
- Light/dark themes
- Campaigns: core + brand-theme + campaign-theme
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
