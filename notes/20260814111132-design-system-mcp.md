# Custom MCPs for design systems

Personally I'm a big fan of making a MCP for a design system.

An MCP goes much further than [[20260306121823-ai-instructions]], namely around where it can get data from. SWAN currently has a general skill in addition to its MCP, which is useful for providing general rules and guiding principles on how to use the design system.

Making your own is much better than relying on something like [[20250811031606-figma-mcp]] for a few reasons:
- You can surface data from many different data sources, like a docsite, NPM packages, custom markdown files, etc.
- You can tweak to what you need, adding capabilities to help with things like migration, deprecation, etc.
- Avoids vendor lock in [[20220902015338-vendoring]]. Both as a concept, but also getting that data into a vendor can be tricky.

More and more tools are allowing connections to custom MCPs too, including Figma. So you can make a custom MCP and still use it from within Figma.

If you had a smaller design system, you could likely get away without a MCP and instead rely on a myriad of instruction files in a central location. That would act as both your docsite and your MCP, and you could just point a skill towards it.
However I think a MCP offers a bit more control and efficiency, which may be necessary.

[[ai]]
[[designsystem]]