# Multi-brand design systems

Making a multi-brand design system makes a lot of sense. It saves each brand re-inventing the wheel, creating a nth Button component when every other brand already has one. It's effectively the design system benefits at scale. Not only does each team within an org get the [[20220509045044-design-system-why|benefits of a design system]], each organisation gets the benefits of the shared system.

Anecdotally, most multi-brand design systems that I've seen start with an agnostic base. A foundation that does not cater to a single brand, but rather caters to every brand. This assumes that each brand wants a distinct style, but can act within the scope of a brand. This does create a [[20210202103254-coupling-cohesion|coupling]], however. As always there's nuance here, and individual systems will have leniency on how much things can be stretched. Variations exist that may cater to certain brands more than others, but code is still made with sharing in mind. A future brand may also use a more tailored variation, or even create componentry their own using shared atoms or tokens. [[20221202114400-design-system-consistency]]
	Note that there's a lot of flexibility in using components to express a different visual/brand language. GEL (Westpac) for example is a pretty rigid design system, but the brands it caters to still feel different due to their specific composition to create pages.

This setup greatly increases the time required for the first brand. In theory, you save that time going forward, as each brand added is minimal effort. It also makes creating a new brand quicker, as you've already got a headstart. That time is also saved if you need to update the base - all brands gain the benefits. The hard part is making the agnostic base that supports everything - you need to look at everything holistically at the start.
	Component tokens play a huge role here, as shown in [[20220822094537-themeable-design-systems]].

It's important to not let the needs of one brand (even if it's your only brand) influence the agnostic base. For example if one brand needs to separate button styling depending on what component it's placed in, consider if that's part of the agnostic base, or part of the brand. This might be solveable through component tokens specific to that brand, rather than built into part of the token architecture. It may be helpful to have a boring 'base' brand that has no styling, to keep your brands uncoupled from the agnostic base as much as possible.

There's also a lot of effort in making each brand use the same spec. Since the shared system often acts as a superset - it needs to encompass everything that every brand needs. Each brand needs to be talking the same language, adjusting as needed for its brand. For example, the behaviour of all components is probably shared across brands. Something like colours though, probably differs per-brand. However each brand needs to be interoperable. If brand A requires 9 shades for every brand colour, then brand B may need to increase their colour palette to better support the new agnostic base. The two brands may be able to get away with different amounts of palettes though, depending on how you set the token architecture up.
	You can in theory allow individual brands to create bespoke things. However it's a lot more difficult (read: maybe impossible) for a brand to _modify_ something existing. e.g. it's easier for a brand to create a custom hero component than modify the existing button component to add a third variant.
	[[20230731113037-snowflakes-vs-modifications]]

I'm a bit unsure about setting a default core vs requiring everything to be set per brand. Brad Frost in https://bradfrost.com/blog/post/the-many-faces-of-themeable-design-systems/ advocates for having a core and each brand theme adding on top of that. Where that core starts and stops is a bit fuzzy though, and may depend on your use case. Should each brand dictate what `border-standard` points to? Or does that always point to `base-border-100`, and they just change the value of `base-border-100`? What about something like colours, which may have differently named palettes depending on brand colours?

A lot of this work then becomes people problems rather than technical problems. A single design system across brands means that design system needs to support everyone, and appropriately weigh up the requests of one brand to another. If your brands have subtly different goals, this can get even more difficult. When can you find the time to make a component that is only used on a subset of brands? Something like [[20220704011551-tiered-design-systems]] can help here.

---

#breakdown - interoperable design systems, and different ways of making things multibrand?
#todo
Theming two different different design systems to be interoperable is difficult, and maybe not even possible. Often not all components have a 1:1 replacement, meaning you're using different APIs, conventions, layout, abstractions, etc. Ideally, most things are achieved through [[designtokens]]. But depending on the flexibility between brands, that may or may not be possible. Once you get outside the realm of tokens (think, functionality), the complexity grows quickly.

A somewhat similar approach is to make your components brandless, and each brand can compose them into something that fits their brand. This approach probably relies on each brand bringing more to the table, as many components won't exist in the base. https://www.designsystems.com/the-forge-harrys-approach-to-multi-brand-design-systems/

Alternatively, align on a visual language, with separate codebases. Akin to Material Design which has different implementations, this allows you some wiggle room while still achieving cohesion across different brands. It becomes blurry on if this is one design system or multiple, but there's wiggle room as needed.

https://saleena.design/portfolio/project-5/
https://medium.com/bts-design-team/building-a-multi-brand-design-system-79469d425bf3
https://uxdesign.cc/challenges-of-multi-brand-design-systems-42d7e7b1d18c
https://www.youtube.com/watch?v=u1mi0VJOuZ8
https://www.supernova.io/blog/eight-multi-brand-design-systems-elevating-global-brand-consistency

[[20220822094537-themeable-design-systems]]
[[202310041150420-design-system-themes-brands-modes]]
[[20250618022116-types-of-multi-brand-design-systems]]

[[designsystem]]
[[designsystembranding]]