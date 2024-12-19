# Tiered design systems

Design systems don't need to be a single library, a single source of truth, a single core.

Systems are often explained with a core, and potential components to bring in from feature teams [[20211122112956-design-system-component-hierarchy]]. However, there's nothing stopping you from systemising library tiers. Each tier can be its own mini design system - responsible for a certain domain (not necessarily a feature domain), with components eventually being promoted up to the main core library.

Design systems are not unlike regular code. Code is first created in a co-located position. When it needs to be shared, its moved up to a more accessible position. Often time this process is repeated, with the code abstracting to more generic functionality that's applicable across a wide range of usage. A design system can mirror this process through tiers, enabling consistency at different scopes.

Failing to do this can mean the design system becomes a bottleneck. It aims to support everything for everyone, and effectively you've just offloaded all UI component work to a single team which is not sustainable.

Remember, design systems are [[20211122111728-design-system-multiple-systems|systems of systems.]]

Don't limit yourself to code either, share libraries in your UI tooling too, like Figma. https://medium.com/eightshapes-llc/figma-shared-libraries-d2dfbf9d1b8d

Keywords: 'Expansion pack', 'Subsystems'

https://bigmedium.com/ideas/design-system-ecosystem.html#recipelayeroptional
https://medium.com/eightshapes-llc/design-system-tiers-2c827b67eae1
https://shinytoyrobots.substack.com/p/the-hub-and-spoke-design-system-model
https://bigmedium.com/ideas/the-art-of-design-system-recipes.html

[[20220808103811-spotify-encore]]
[[20231103105137-design-system-recipe-layer]]

[[designsystem]]