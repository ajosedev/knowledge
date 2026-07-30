#breakdown 
#todo

Big braindump of how AI changes product work, design to code, code to design, prompt to design, prompt to code, etc.

# Figma Make

Figma Make is effectively a tool to generate designs via code/prompt, featuring a visualisation of said code inside a browser-like view.

Thinking about it another way, it's actually kind of a design via code tool, and then you can iterate on that code. While you can give it a design to use, it's still always generating code, and you will need to alter code to alter your design. You are not actually creating Figma designs, and thus Figma Make has little-to-no interaction with your UI Kit. You can copy the output to a Figma file (w/ 'Copy Design'), but this doesn't do a translation back into your UI Kit - it just recreates the code into design, to the best of its abilities.

Uses AI Credits, which have a similar mental model to tokens, but correspond to Figma's billing.

When using your UI Kit as an input to Figma Make, it generates something that looks like your design system. However since it's powered by code, it seemingly remakes your components with Tailwind and Radix, using custom CSS, style attributes, etc. It seems like it's "extracting" library styles, rather than using your library.
	Unsure if this would be better if you had something like Code Connect working, but I don't think so.
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

One thing that's a bit more difficult than design-via-code in a more production-like app, is the requirement to set up boilerplate. For example, your Header and Footer need to be imported as code, which may not be as easy in a Figma Make environment, if those are libraries outside of your design system. Data may become an issue as well.
It feels like you need Figma Make-specific setup and libraries to make a fully fledged page, which may be better served by just doing it in the production app itself. Of course, this depends on what your goals are.
A Figma Make Template could be a good way of sharing Figma Make-specific code and components for this purpose, although I haven't tested it. In theory you could make a mock Header/Footer component and share that as part of the template, to avoid re-building it.

My overall evaluation (Mar 2026) is that it's a nice tool for playing around with, but quickly becomes limiting. For an organisation it's nice to not have to set up tools like VS Code or Claude Code - everyone already has a prompt-to-code tool installed. However it has some big disadvantages over a custom setup - no real browser, no control over the development environment, etc. On top of that, you don't get many benefits from Figma that you may expect, such as the ability to edit designs by hand. Like most AI tools with design, the last few steps of refining is very difficult.
	TODO - revaluate

***Update on Make Kits***
Make kits are newly released. It seems like they're more of a bundle and layer of abstraction on top of the direct inputs that used to exist, i.e. using a NPM package and extracting a style context directly. They can include:
- npm packages for code context
- Variables and styles from published Figma Design libraries
- Guidelines to help Figma Make understand how to use your system's assets
It seems very similar to what Make Templates were before - a bundle of packages + guidelines.

As far as I can see they are either:
- Your NPM package + some MD instruction files
- A recreation of your UI Kit as a pseudo-NPM package (re-created with Tailwind, Radix, etc) + some MD instruction files
Note that it's one or the other.

It is not UI Kit components. Even when you 'pull style guidance' from your UI Kit, you're not using it. Remember that Figma Make is a design-by-code tool. So if you put your UI Kit into a Make Kit, what you're doing is instructing Figma Make to create a component library using your UI Kit as a basis for decisions.
>Make kits currently don't support full extraction of design tokens. Instead, it pulls a subset of your variables and uses them to generate a global CSS file with raw values

It seems like this is the boilerplate that's shared for starting to use Figma Make, rather than a Template of a packages + guidelines.
Make Templates still exist but they seem to be for more of a starter kit for a specific design.

If you have a component library, definitely use the NPM package approach. It will get your actual production-ready components in Figma Make. It also seems best to add your NPM package to a Make Kit, rather than using it directly, so you can add supporting guidelines.
https://www.figma.com/blog/introducing-make-kits-and-make-attachments/

Annoyingly, Make Kits means that you cannot directly use a NPM library when creating a new Make file. The only way to import just the NPM package is to create a new Make Kit and work in that file, or get AI to install it for you after starting a file.

Confusingly, Make Kits are also regular Make files. The file where you are editing your guidelines, instructions, etc. is also a file in which you can generate designs for testing, etc. You need to use this file to publish update your Make Kits.

I've often found that the instructions are ignored also, and I have to explicitly reprompt it when it does something wrong, and remind it of the instructions, e.g. 'do not use Tailwind'.

Connectors
	You can connect your MCP server to Figma Make, allowing you to run the necessary tools
	I think this is how you can make the Figma Make environment closer to a developer's environment. Rather than needing to make Figma-specific guidelines to replicate your MCP server.
	Connectors can't be local MCP servers.
	Anecdotally this doesn't actually seem to add that much in terms of AI Credits used

You can also have skills in Figma Make?
	Seem to be like regular skills, but need to be uploaded to Figma Make directly
	Can publish to share with org

Make Kits are published to the `@make-kits` scope, wrapping your NPM package and bundling anything else that's part of the Make Kit. Namely guidelines and setup files.

A Make Kit has several guidelines in the `guidelines` folder which seem very important, and have recommendations on how to write them https://developers.figma.com/docs/code/write-design-system-guidelines/

I found value in making a skill that tells it to audit against the provided guidelines in the Make Kit. Invoking this like an audit often finds a fair few things, and because you're making it check against the guidelines, you don't have to duplicate instructions which may fall out of parity otherwise.

**Connecting your repo**
The tool is always evolving.

With https://www.figma.com/blog/figma-make-now-on-your-local-code/, you can also connect to your actual code repo, making branches, commits, etc.

While this originally looks pretty crazy, I think it's just a nice wrapper around a browser window, prompt window, and their Figma annotation tools. Effectively they've just turned Figma Make into a nicer desktop app for prompting, similar to something like OpenCode Desktop. This lets you add better git diffs, commit things, etc.

The magic part is being able to make direct edits in the Figma properties panel, changing things like fonts, padding, effects, etc. I have no idea how this works yet, but I imagine it's just using tailored AI prompting and reflecting that in the UI somehow. I'm weary it will work with things like padding or typographic React props, rather than CSS.

https://help.figma.com/hc/en-us/articles/40775535020695-Make-in-your-local-codebase

# Figma MCP

[[20250811031606-figma-mcp]] (updated)

Note that some tools create Tailwind etc by default - maybe update the doc with a list of useful tools (like use_figma, generate_design_context, etc)

Talk more about the remote vs desktop MCP servers. Figma prefers the remote version, and I think you can only write with the remote version

Figma just released https://www.figma.com/blog/the-figma-canvas-is-now-open-to-agents/
	I think this is basically a way of loading AI agents to _write_ to and make changes IN Figma. Previously it was mostly for reading from Figma
	Agents can now effectively use the Plugin API directly
	It seems like it's mostly a way to give more information to AI tools about Figma. So it opens the door to things like creating styles, creating components, etc.
	This is just an extension of the Figma MCP, not anything new
Need to update [[20250811031606-figma-mcp]] with this, as it's actually pretty big.
With `use_figma` in the MCP server, the Figma MCP server can execute JS in Figma files via the Plugin API. Often the Plugin API has more power or control than the REST API.
	In turn, this is why Figma recommends using the `figma-use` skill whenever invoking the `use_figma` tool.

# Design System MCP

How's this fit in?
Do you need a MCP, or is it just some form of [[20260306121823-ai-instructions]]?
Instructions maybe only go so far, you could also use [[20260306121850-ai-agent-skills]]?
Maybe MCP is the top level, but not necessary a lot of the time (depending on your information sources)

Does this need its own doc on different learnings from different articles?
Do some research in this area
e.g. https://ui.shadcn.com/docs/mcp

We have one now, so write about what it does.

Also how it's better than just piping everything into Figma and that owns your documentation and pipes it out through the Figma MCP
Doing it separately means it works better for code-only workflows
Also it's really difficult to get information into Figma in a automated manner
	Don't want to manage a docsite and a parallel docsite in Figma

---


How do you do code to design?
	Figma MCP server allows you to capture a page and send it to Figma, using the `generate_designs` tool.
	It works pretty well, mimicing some features that were in things like `html.to.design`. You can send entire pages, or Figma adds a browser script that lets you select certain elements.
	Unfortunately, it does not use your UI Kit. Also it relies on a browser and a dev environment, it can't look at just raw code.
	I think it's dealing with HTML to Design, like some of the older tools before AI was so popular. Which inherently means it's going to be tricky to actually use your UI Kit (or components) because it's already abstracted away at this point.
	Figma offers a `figma-generate-design` skill too, which relies on things like Code Connect.
		TODO - link Code Connect to whatever this doc is

Alternatively:
	There's also the new `use_figma` tool which lets the agent interact with Figma directly - in theory this would work
		Historically it seemed like there was generate_designs [(Code to Canvas)](https://developers.figma.com/docs/figma-mcp-server/write-to-canvas/) , then replaced by use_figma [(Write to Canvas)](https://developers.figma.com/docs/figma-mcp-server/write-to-canvas/).
			The latter has examples like this: "Using this Figma file: URL, create a new page and build a settings screen with auto layout using our existing components."
		The latter talks a lot more about using your design system, whereas the first link does not mention it at all
	Seems like Figma Make 'Copy Design' button doesn't do it
	https://developers.figma.com/docs/figma-mcp-server/skill-figma-generate-design/ looks like a skill that is made to do this
	Is Code Connect a boost here? Would it make things better? Maybe if it was looking at code rather than a UI/HTML
		In general Code Connect is advertised like it makes everything better

*Don't think this is necessary anymore:*
Generally need to list down the different things you can do and how they currently work:
- Code -> Design: `use_figma` tool as well, will actually use your UI Kit
- Prompt -> Design: `use_figma` tool, will actually use your UI Kit
- Prompt -> Code: whatever agentic AI. Figma Make also can do this for you within Figma. Add additional context through MCP servers, etc.
- Design -> Code: whatever agentic AI. Add additional Figma context through MCP Server, Code Connect, etc.


[[20260617024622-design-to-code]]
[[20260617024455-generating-design]]