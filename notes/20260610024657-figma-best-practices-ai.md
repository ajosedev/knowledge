# Best practices for using Figma with AI

https://help.figma.com/hc/en-us/articles/38978644498199-Best-practices-to-help-Figma-AI-understand-your-design-system

- Use auto layout to communicate structure and responsiveness
- Provide UI examples in your design system
	- You can put them in an Examples page, our use the `_example` suffix
- Remove unnecessary hidden layers, which are otherwise included in context
- Build reusable blocks and patterns
	- This allows AI to reference higher order compositions rather than atomic things like buttons, etc.
- Give layers and components meaningful names
- Define your component properties and variants
- Use variables for colors, spacing, and typography
- Document your components, styles, and variables
	- These need to be in Figma, but can link to external documentation as needed
	- Not sure how you do this in a scalable way
	- "Good documentation explains the _why_, not just the _what_"

Interestingly it doesn't mention slots nor code connect, but presumably that will be referenced later.

[[ai]]
[[figma]]