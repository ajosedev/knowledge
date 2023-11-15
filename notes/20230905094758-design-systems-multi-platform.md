# Creating multi-platform design systems

Some thoughts on making multi-platform design systems

Most companies that have to deal with this start from a really agnostic base or foundation. This foundation doesn't have an in-platform implementation, but is more like a spec sheet. This allows everyone to be consistent with terminology and make decisions that work for all platforms. Sometimes this is split into two, with the 'definitions' handling the API, naming, guidelines, etc. and the 'foundation' handling voice & tone, principles, branding, etc.

The next layer is often design tokens, these are shared across all your platforms, so they can build upon your foundation in a scalable way.

The goal is often cohesion, not consistency. [[20230116121916-design-system-purpose]] [[20221202114400-design-system-consistency]]. Different platforms require different designs due to their intrinsic use, so the components should adjust as needed. Users often expect the components and platforms to act differently. The essence of the component and brand can still be shared. 

A lot of the guidance around multi-platform design systems is similar to that of multi-brand design systems [[20221025093009-multi-brand-design-systems]]

A lot of the expression and differences between brands/platforms come from the layer above the atoms. Buttons and links can often look the same, but especially for multi-brand design systems, components made out of other components often have more variation.

Multi-platform design systems often differ in their approach due to: the number of platforms and applications per platform, the amount of users the design system has, how much consistency/coherency between systems is required.

Avoid components having similar but different APIs for no reason. e.g. `variant` vs `type`, `danger` vs `error`. There is often a need for difference, but it should be intentional.

Try to avoid unintentionally building for a particular platform. It can be advantageous to design and build in parallel to consider the needs of all platforms. Documentation-first approaches also help with this.
>We design and build in parallel so any discussions on details that come up during implementation (and there are usually many) get addressed and considered together.
>[A system built on parity: How to treat all of your users equally](https://www.designsystems.com/a-system-built-on-parity-how-to-treat-all-of-your-users-equally/)

Frameworks like React Native and Flutter, or even Electron/Cordova can sometimes be the right tool for the job, but they are often not.

Naming is important. Platforms often lend themselves to different names, but the name of a component should be consistent across all platforms for ease of use.

[[20230116034042-design-system-contributions]] can be even trickier. Often a team doesn't have the resources to build across all platforms, causing components to fall out of sync. Parity needs to be prioritised to overcome this.

https://dbanks.design/blog/multi-platform/
https://booking.design/how-we-built-our-multi-platform-design-system-at-booking-com-d7b895399d40
https://www.figma.com/blog/creating-coherence-how-spotifys-design-system-goes-beyond-platforms/

Keywords: iOS, Android, Swift, Kotlin, Multiplatform

[[designsystem]]
[[designsystemapi]]
[[product]]