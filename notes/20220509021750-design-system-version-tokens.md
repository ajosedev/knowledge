# Version design system tokens separately

If the tokens are not embedded into a component library, you can create smaller, more focused releases. Rather than blocking a colour in an entire release with new components and breaking changes, you can just tweak a colour for more accessibility.

This allows all adopters to get the most current definition of visual style regardless of their version of the component library. This can be important for company-wide initiatives such as a colour rebrand. All consumers don't need to update their components before a certain date, just their tokens.

Generally, this provides more flexibility at the cost of overhead. It's worth considering how backwards compatible these changes are. If you deprecate a colour used only by an older component, what happens to adopters on that older library version?

Note that token changes _can_ be breaking. Consider a text colour change that now renders a poor contrast, or a font-size change that now wraps a tab component.

[[20220509021116-design-system-versioning]]

[[designsystem]]
[[designtokens]]