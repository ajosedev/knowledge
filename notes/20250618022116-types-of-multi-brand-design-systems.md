# Different types of multi-brand design systems

I see a lot of design systems that claim to be 'multi-brand'. However, there's large differences in terms of the flexibility ([[20220621083440-design-system-flexibility]]) of these design systems.

I see two main types:
- Changing accent colours, typically used for very similar brands, or whitelabelling. Think changing the main CTA colour, maybe changing a font or two
	- Note that separate from this decision is how the structure of the page is dictated. Allowing different brands to build different pages will inherently create more distinct websites than using the same structure and just applying a 'theme' on top.
- 'True multibrand', starting with an agnostic base, each brand looks distinctively different.
	- However there's still a large amount of variation in the types of these design systems too

There's also different ways of expressing visual differences of brands, using a mix of the two types. Some design systems to illustrate the point:
- GEL - opinionated, not many components. Brands seemingly draws differences through opinionated page design, even if using the exact same components.
	- Note that some pages use identical pages, which limits brand expression and looks closer to a 'skinned' website
- Harry's Forge - similar to above, but builds slightly lower level shared pieces that are expected to be composed in different ways. e.g. components for individual parts of a cart. Low level components that are built up into new things. This relies on composition to be done at a level slightly higher than the design system, like [[20220808103811-spotify-encore]]. [[20231103105137-design-system-recipe-layer]]
- Conde Nast's Verso - a superset of all their brands. larger than most multi-brand things and seems to be more of a superset. Many complex components, and brands can be expressed by both modifying them, and using only the components they need. (superset)

How you actually use the design system is a large part of what allows different brands to express themselves. For example, if brands have identical websites and only differing tokens, they'll still feel the same. 'True multibrand' requires changing component structure, style, behaviour, content, page structure, etc. even if all components still come from a single place.
	Sometimes to necessitate the latter, you'll need a large amount of 'content layout components', those that allow different ways of layout depending on what matches the identity of the brand, like Conde Nast has.

The ownership and governance model between multibrand design systems is interesting too:
- Some are closer to a **superset**, where one team owns everything, but not every brand uses every component
- Others are closer to an **intersection**, where one team owns everything that's common to all brands
- In rarer cases there is a single 'master' set, and all brands operate using that, which is closer to applying a 'skin' on an existing single-brand design system.

Neither of these necessarily influence the [[20220621083440-design-system-flexibility]], they're more about who's responsible for building what. For example in both examples, individual teams may be able to create additions and bespoke components as needed.

You can go even further than this, and define a visual language rather than shared component/UI artifacts. Material Design has different implementations, which allows you some wiggle room while still achieving cohesion across different brands. It becomes blurry on if this is one design system or multiple, but there's wiggle room as needed.

Regardless of the setup, the most complex thing seems to be modifications. It's simple enough to build something custom with tokens, atomic components, etc. It's much more difficult to inject a fourth Button styling, or change the default behaviour of a component.

https://bradfrost.com/blog/post/the-multi-all-the-things-organization/

[[designsystem]]
[[designsystembranding]]
[[designtokens]]