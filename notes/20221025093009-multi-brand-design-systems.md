# Multi-brand design systems

Making a multi-brand design system makes a lot of sense. It saves each brand re-inventing the wheel, creating a nth Button component when every other brand already has one. It's effectively the design system benefits at scale. Not only does each team within an org get the [[20220509045044-design-system-why|benefits of a design system]], each organisation gets the benefits of the shared system.

Anecdotally, most multi-brand design systems that I've seen start with an agnostic base. A foundation that does not cater to a single brand, but rather caters to every brand. This assumes that each brand wants a distinct style, but can act within the scope of a brand. This does create a [[20210202103254-coupling-cohesion|coupling]], however. As always there's nuance here, and individual systems will have leniency on how much things can be stretched. Variations exist that may cater to certain brands more than others, but code is still made with sharing in mind. A future brand may also use a more tailored variation. [[20221202114400-design-system-consistency]]

This greatly increases the time required for the first component. In theory, you save that time going forward, as each brand added is minimal effort. It also makes creating a new brand quicker, as you've already got a headstart. That time is also saved if you need to update the base - all brands gain the benefits. The hard part is making the agnostic base that supports everything.

There's also effort in making each brand use the same spec. Since the shared system often acts as a superset, each brand needs to be talking the same language, adjusting as needed for its brand. For example, the behaviour of all components is probably shared across brands. Something like colours though, probably differs per-brand. However each brand needs to be interoperable. If brand A requires 9 shades for every brand colour, then brand B may need to increase their colour palette to better support the new agnostic base.

Theming two different different design systems to be interoperable is difficult, and maybe not even possible. Often not all components have a 1:1 replacement, meaning you're using different APIs, conventions, layout, abstractions, etc.

A somewhat similar approach is to make your components brandless, and each brand can compose them into something that fits their brand. This approach probably relies on each brand bringing more to the table, as many components won't exist in the base. https://www.designsystems.com/the-forge-harrys-approach-to-multi-brand-design-systems/

Alternatively, align on a visual language, with separate codebases. Akin to Material Design which has different implementations, this allows you some wiggle room while still achieving cohesion across different brands. It becomes blurry on if this is one design system or multiple, but there's wiggle room as needed.

https://saleena.design/portfolio/project-5/
https://medium.com/bts-design-team/building-a-multi-brand-design-system-79469d425bf3
https://uxdesign.cc/challenges-of-multi-brand-design-systems-42d7e7b1d18c
https://www.youtube.com/watch?v=u1mi0VJOuZ8

[[20220822094537-themeable-design-systems]]
[[202310041150420-design-system-themes-brands-modes]]

[[designsystem]]
[[designsystembranding]]