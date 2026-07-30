# Figma's Code Connect

Code Connect is a bridge between your codebase and Figma, connecting components in your repositories directly to components in your design files. With the introduction of [[20250811031606-figma-mcp]], the value of this has massively increased. There's more reasons to have an automatic connection between Figma and Code, regardless of direction. While agents can kind of figure out what's needed from looking at Figma and code separately, Code Connect makes this link a lot stronger.

There's two different setup methods, UI and CLI. The latter is a lot stronger, but requires more setup and maintenance. The CLI uses Template files, typescript files that define how code snippets appear and how Figma properties map to code examples.
```ts
// url=https://www.figma.com/file/your-file-id/Button?node-id=123
import figma from 'figma'

const instance = figma.selectedInstance

export default {
  example: figma.code`
    <Button
      size={${instance.getEnum('Size', { Large: 'large', Medium: 'medium', Small: 'small' })}}
      disabled={${instance.getBoolean('Disabled')}}
    >
      ${instance.getString('Text Content')}
    </Button>
  `,
  imports: ['import { Button } from "components/Button"'],
  id: 'button',
}
```

I still need to do some more experiments of it, as it does tie you to Figma more. You could in theory solve this with different [[20260306121823-ai-instructions]]. You definitely need something to help with the translation though, as a browser and Figma are different tools, and thus require different solutions. For example a Grid component doesn't work as well in Figma, and sometimes it makes sense to make convenience properties to make the API better than code.

This is the most concrete explanation I've found of why Code Connect helps with AI: https://developers.figma.com/docs/figma-mcp-server/server-returning-web-code/#about-the-get_design_context-tool
>When you use the `get_design_context` tool, the MCP server encodes a Figma design into a format that preserves visual fidelity and is structured in a way that large language models (LLMs) can readily interpret.
>If you have Code Connect set up, the `get_design_context` tool will use it to include information about your codebase which you provided.

As far as I can tell, Code Connect doesn't help with any other tool call (as of Jun 2026).

From playing around with it without Code Connect, the tool call seems to return very React + Tailwind reliant code, with metadata sprinkled about tying node IDs, layer names, etc. The response features components, JSX, classes, and Figma metadata (mostly component descriptions). Importantly the response does not feature any information about the properties used in a Figma component, only the result of using those properties. For example, a `border` prop on Card will add a border with Tailwind, but it will not expose that the property has been used, which may map to a prop in code.

Once you add Code Connect, you get embedded snippets that follow your system, but it's still surrounded by React + Tailwind code.
```jsx
<div className="content-stretch flex gap-[var(--sem\/space\/1,0px)] items-center justify-center px-[var(--sem\/space\/2,4px)] py-[var(--internal\/search-input\/padding\/vertical,4px)] relative shrink-0" data-node-id="I455:31700;61846:5285" data-name="Button Group">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="I455:31700;61846:5286" data-name="Search Button">
              <CodeConnectSnippet data-node-id="I455:31700;61846:5286;59009:901" data-name="Button" data-snippet-language="React">
                <Button skin="tertiary" iconPosition="right" buttonShape="round">
                  <Icon iconType="search" />
                  Button
                </Button>
              </CodeConnectSnippet>
            </div>
          </div>
        </div>
```

I don't see the conversational context changing much about the response, but it influences how the agent attempts to translate that Tailwind code.

Slots are a bit unexpected with Code Connect. They represent an unknown black box that can contain anything, but they're also like their own component which can have styling, auto layout, etc. In the Dev Mode UI it doesn't work great - they appear as a clickable element, which takes you to the slot element. That in itself has no code preview - it does not iterate over its children to show you its UI. However, when using the Figma MCP, because it traverses everything it will return the code snippets for all components inside the slot. It does do the iteration. With the small caveat that it renders Tailwind styling for said slot, which needs to functionally be ignored most of the time.
	Effectively you need to treat it as a void, and then ensure everything that could be inside the slot is hooked up to Code Connect.
	https://github.com/figma/code-connect/issues/387

Code Connect doesn't cover everything though, namely Figma styles. Agents can be pretty good at figuring out how these map, but typography (as an example) can be done through props, classes, components, etc. You main need additional [[20260306121823-ai-instructions]] to help with this translation.

I think this does also help with [[20260617024455-generating-design]], but mostly through custom skills which can use the template files as a way to help with the mappings in Figma. No other Figma MCP tool seems to explicitly rely on it.

https://developers.figma.com/docs/figma-mcp-server/code-connect-integration/

[[20260617024622-design-to-code]]

[[ai]]
[[designsystem]]
[[figma]]