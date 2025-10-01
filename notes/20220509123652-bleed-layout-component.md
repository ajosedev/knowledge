# Bleed layout component
Often components have in-built padding as a default. Think of `Card`, or a blog with larger images than the text width.

In some cases there's a need to break away from that. Something needs to be flush with the edges of the component, or generally exceed its parents margins.

A `Bleed` component can do this. Using negative margins, we can exceed to content space dictated by the parent.

![[Bleed component.png]]

The tricky part is knowing how much to 'bleed'. Since this is a value set by the parent, there's maintenance difficulty if that value changes. If the two values are co-located it's easy, but this is not often the case.

Some solutions for this:
- Provide the value through a CSS variable which the Bleed component can read from
- Provide the padding through some sort of context-like API or theme
- Use semantic tokens, e.g. `space--card-padding` [[20210927144324-design-tokens]]
- etc

For some components that often require bleeding, it makes sense to make that a responsibility of the component itself. Given an 'icon button', the bleed amount wanted will usually be equal to the padding applied to said icon button. The implementation can still use the `Bleed` component under the hood.

[[20200314214239-layout-components]]

[[components]]
[[designsystem]]
[[space]]