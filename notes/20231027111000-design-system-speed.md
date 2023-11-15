# Design systems are supposed to move slow

Design systems have loads of ways of making product development more efficient [[20220509045044-design-system-why]]. The twist is that design system development is supposed to be slow. In particular, **design systems are supposed to move more slowly than the products they support**. Crucially, this means that design system development needs to be off the critical path. It needs to not be a bottleneck/blocker to shipping a product.
	A nice way to refer to this difference in speed is [pace layers](https://jods.mitpress.mit.edu/pub/issue3-brand/release/2). Certain things naturally move faster than others. 

Product teams need to move faster than design system teams. That's just a fact of how product teams need to work. Sometimes that means short-term hacks, design debt, technical debt, etc are accrued. But that's okay - remember that technical debt can be used as a resource [[20220509052548-tech-debt-is-a-resource]]. On the flip side, that's far less true in a design system world. Although there are exceptions ([[20220523120144-design-system-quality-vs-speed]]), debt in a design system is often far more expensive. Allow the debt to accrue on the product side, but not on the design system side.

The key part here is that design system is critical frontend infrastructure. It's not support for product teams, it's closer to a slow moving infrastructure team with an API. This gives you the permission and sets the understanding to move slowly. Product can move at one speed, design system can move at another, and that's okay. Design systems are foundational, they need to be able to be used with confidence, reliability, and consistency. The tradeoff for that is speed.

If product needs a feature that the design system does not currently (or may never) provide, they can build it themselves. Then the design system can track that component for a possible harvest into the library at a future data [[20220704124529-design-system-harvesting]]. Product is where experiments should happen. Design systems are for proven solutions.
Remember that this doesn't mean a product team can make whatever they want. They should still prefer what already exists in the design system, or create solutions that are in tune with the design system. This just helps to innovate and improve the design system externally.

For this to work, there needs to be healthy communication between the two teams. Ideally product teams communicate early about their needs. People problems are harder to solve than technical problems, but communication, planning, and trust go a long way.

Design systems curate, not innovate. That takes time, and that's okay.

https://bigmedium.com/ideas/design-system-pace-layers-slow-fast.html

[[designsystem]]
[[product]]