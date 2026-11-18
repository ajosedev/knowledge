# Figma's Code Connect

Code Connect is a bridge between your codebase and Figma, connecting components in your repositories directly to components in your design files. With the introduction of [[20250811031606-figma-mcp]], the value of this has massively increased. There's more reasons to have an automatic connection between Figma and Code, regardless of direction. While agents can interpret the translation from Figma to Code, Code Connect lets a maintainer dictate exactly how that translation should work.

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

It starts to get a bit tricky as you want a direct 1:1 mapping for two environments that operate differently. Figma sometimes needs different components or workarounds, and things like [[20200314214239-layout-components]] don't often exist in Figma. So there's a bit of creative interpretation and holes that still need to be plugged by things like [[20260306121823-ai-instructions]].

This is the most concrete official explanation I've found of why Code Connect helps with AI: https://developers.figma.com/docs/figma-mcp-server/server-returning-web-code/#about-the-get_design_context-tool
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

Slots are powerful with Code Connect, but also a bit unexpected. As they're an unknown black box, you can't rely on the parent component to render its children. Each child has to render itself, and then it's composed through something like the [[20250811031606-figma-mcp]] which can recursively loop through everything. This doesn't look great in the Dev Mode UI, but that's something that may change in the future.
	Effectively you need to treat it as a void, and then ensure everything that could be inside the slot is hooked up to Code Connect.
	https://github.com/figma/code-connect/issues/387

Code Connect doesn't cover everything though, namely Figma styles. Agents can be pretty good at figuring out how these map, but typography (as an example) can be done through props, classes, components, etc. You main need additional [[20260306121823-ai-instructions]] to help with this translation.

I think this does also help with [[20260617024455-generating-design]], but mostly through custom skills which can use the template files as a way to help with the mappings in Figma. No other Figma MCP tool seems to explicitly rely on it.

https://developers.figma.com/docs/figma-mcp-server/code-connect-integration/

[[20260617024622-design-to-code]]

[[ai]]
[[designsystem]]
[[figma]]