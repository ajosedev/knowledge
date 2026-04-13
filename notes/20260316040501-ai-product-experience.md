#breakdown 

Big braindump of how AI changes product work, design to code, code to design, prompt to design, prompt to code, etc.

# Figma Make

Figma Make is effectively a tool to generate designs via code/prompt - prompt-to-code, featuring a visualisation of said code.

Thinking about it another way, it's actually kind of a website builder that generates code, and then you can iterate on that code. Note that you can give it a design to transform into code, you don't have to design entirely via prompt.

Remember though you're not creating Figma designs, you're generating code that powers the in-built browser. You can copy the output to a Figma file (w/ 'Copy Design'), but importantly it does not use your UI Kit components. So you cannot iterate on the outfit in Figma by hand.
	Note that this may change once they introduce 'Make Kits', but it's unclear how good it will be at going back and forth between design and code.

You don't actually generate Figma designs, you generate code that powers the in-built browser like thing. That being said, you can copy the output into a Figma file, or publish the code as a website.

When using your UI Kit as an input to Figma Make, it generates something that looks like your design system. However since it's powered by code, it seemingly remakes your components with Tailwind and Radix, using custom CSS, style attributes, etc.
	Unsure if this would be better if you had something like Code Connect working.
	Also to my understanding, this is not actually Make Kits, it's something different (which is confusing)
In most cases, this feature isn't very helpful. I'm not sure how many people would have a UI Kit but not a Component Library.

When you use your NPM package, i.e. your component library, it's a lot better. I've found that you don't really need to use the UI Kit in combination with the NPM package, but it may help.
Note that I've found guidelines/instruction files are really imperative. Figma Make seems to really want to make things in a structured way, i.e. create a `theme.css` file, use Radix UI components, use CSS variables for styling, etc. You need to actively work against that in favour of using your DS as-is.

It uses an opinionated full Vite starter app, so you often need to set up some boilerplate for things like loading styles, providers, etc. You have a limited amount of control of the build process, which is a bit annoying if something needs to load from a CDN, you need to setup a static folder, etc. The best way I've found to control this is through guidelines. https://developers.figma.com/docs/code/write-design-system-guidelines/
[[20260306121823-ai-instructions]]

It's not a real browser, but there is a 'Point and Edit' feature that allows you to inspect the preview like it's a Figma design. Some things are still missing which you'd get in a real browser, but it makes it a lot easier to find what's being used where, change small properties like spacing, etc.
	It's not a design either though, so you can't change Figma properties from your UI Kit directly. It's more like treating it as generic code. For example, in my testing I could change the background colour of a Button, which isn't a prop in code, or a property in the Figma component.

For sharing, you can share things as a Template. A template can be packages and guidelines only, or a full starter app. This helps you iterate on things like guidelines, boilerplate, etc. and then share that across your organisation.

Unsure if you use Code Connect with Figma Make, do you need the NPM package part?

As far as I can tell, this is the closest thing that Figma has that's prompt -> design that uses your UI Kit. 'First Draft' exists, but as of now it's limited to some generic pre-made libraries.

My overall evaluation (Mar 2026) is that it's a nice tool for playing around with, but quickly becomes limiting. For an organisation it's nice to not have to set up tools like VS Code or Claude Code - everyone already has a prompt-to-code tool installed. However it has some big disadvantages over a custom setup - no real browser, no control over the development environment, etc. On top of that, you don't get many benefits from Figma that you may expect, such as the ability to edit designs by hand. Like most AI tools with design, the last few steps of refining is very difficult.

# Figma MCP

[[20250811031606-figma-mcp]] (updated)

# Design System MCP

How's this fit in?
Do you need a MCP, or is it just some form of [[20260306121823-ai-instructions]]?
Instructions maybe only go so far, you could also use [[20260306121850-ai-agent-skills]]?
Maybe MCP is the top level, but not necessary a lot of the time (depending on your information sources)

Does this need its own doc on different learnings from different articles?
Do some research in this area
e.g. https://ui.shadcn.com/docs/mcp

# Different tools

Claude vs Copilot vs Copilot CLI

What is OpenCode?

What are evals?

How do you do code to design?
	Figma MCP server allows you to capture a page and send it to Figma, using the `generate_designs` tool.
	It works pretty well, mimicing some features that were in things like `html.to.design`. You can send entire pages, or Figma adds a browser script that lets you select certain elements.
	Unfortunately, it does not use your UI Kit. Also it relies on a browser and a dev environment, it can't look at just raw code.
	
	I think it's dealing with HTML to Design, like some of the older tools before AI was so popular. Which inherently means it's going to be tricky to actually use your UI Kit (or components) because it's already abstracted away at this point.

How do you do design to code?
	This one I have more of a handle on

Figma just released https://www.figma.com/blog/the-figma-canvas-is-now-open-to-agents/, does that make it more aware of UI Kits?
	Is this the missing piece that helps go back and forth?

How do I structure all these documents?