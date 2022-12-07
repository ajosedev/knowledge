# Theming Storybook

Pushing the limits of Storybook to make it a primary documentation site - not just a developer tool.

Since we have MDX, we have React. With React, we can feasibly do anything within the scope of a page. Storybook seems to fall down when you want to update the IA or hierarchy of the page - you can't add sub categories, landing pages, etc.

Docs and UI are often styled through different means, such as `preview` and `manager`. The 'preview' refers to the iframe that renders your components in isolation. The 'manager' refers to the UI of Storybook itself.

This also means the 'Canvas' tab and the 'Docs' tab can be styled independently.

## Manager.js
There's a fair chunk of options in `manager.js` that let you update features and hide/show UI [link](https://storybook.js.org/docs/react/configure/features-and-behavior)

## Themes
[link](https://storybook.js.org/docs/react/configure/theming#theming-docs)
Various options are available in a base 'theme' object, such as fonts, text colour, backgrounds, etc.

Note that
> [Storybook Docs](https://storybook.js.org/docs/react/writing-docs/introduction) uses the same theme system as Storybook’s UI but is themed independently from the main UI.

## CSS
[link](https://storybook.js.org/docs/react/configure/theming#css-escape-hatches)
If the theme can't change what you need, most things have a stable CSS selector that you can target. It seems some selectors are more supported than others, and this is considered an 'advanced' feature.

## MDX
[link](https://storybook.js.org/docs/react/configure/theming#mdx-component-overrides)
When it comes to the docs page itself, if you're using MDX, you can override the components that are rendered. This keeps the authoring experience of Markdown, but gets you a custom output that is more on-brand.

> MDX allows you to completely override the rendered components from Markdown using a `components` parameter. It's an advanced usage that we don't officially support in Storybook, but it's a powerful construct if you need it.

[[designsystem]]
[[documentation]]
[[storybook]]