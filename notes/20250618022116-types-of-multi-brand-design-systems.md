# Different types of multi-brand design systems

I see a lot of design systems that claim to be 'multi-brand'. However, there's large differences in terms of the flexibility ([[20220621083440-design-system-flexibility]]) of these design systems.

I see two main types:
- Changing accent colours, typically used for very similar brands, or whitelabelling. Think changing the main CTA colour, maybe changing a font or two
- 'True multibrand', starting with an agnostic base, each brand looks distinctively different.
	- However there's still a large amount of variation in the types of these design systems too

There's also different ways of expressing visual differences of brands, using a mix of the two types. Some design systems to illustrate the point:
- GEL - opinionated, not many components. Brands seemingly draws differences through opinionated page design, even if using the exact same components.
- Harry's Forge - similar to above, but builds slightly lower level shared pieces that are expected to be composed in different ways. e.g. components for individual parts of a cart. Low level components that are built up into new things
- Conde Nast's Verso - a superset of all their brands. larger than most multi-brand things and seems to be more of a superset. Many complex components, and brands can be expressed by both modifying them, and using only the components they need. (superset)

The ownership and governance model between multibrand design systems is interesting too:
- Some are closer to a **superset**, where one team owns everything, but not every brand uses every component
- Others are closer to an **intersection**, where one team owns everything that's common to all brands

Neither of these necessarily influence the [[20220621083440-design-system-flexibility]], they're more about who's responsible for building what. For example in both examples, individual teams may be able to create additions and bespoke components as needed.

Regardless of the setup, the most complex thing seems to be modifications. It's simple enough to build something custom with tokens, atomic components, etc. It's much more difficult to inject a fourth Button styling, or change the default behaviour of a component.

https://bradfrost.com/blog/post/the-multi-all-the-things-organization/

[[designsystem]]
[[designsystembranding]]
[[designtokens]]