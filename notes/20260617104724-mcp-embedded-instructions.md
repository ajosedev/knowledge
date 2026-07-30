# Embedding common instructions into a MCP server

For our [[designsystem]] MCP we needed a way of injecting principles and guidelines across all of our MCP tools. This would encourage the AI to follow similar processes to what we give to humans, around consistency, communication, etc. Although I haven't tried any of the following, there's a few methods I can think of to do this:
1. Embedding instructions into the tool descriptions. As each tool can have a description, you can give guidance relevant to that individual tool, or duplicate guidance in each tool.
2. Embedding instructions into server instructions. `instructions` are loaded with the initialise call. That can provide a top-level view on how the MCP should be used, recommending a certain flow or check step, for example.
3. Introducing a middleware function (not tool) called on every tool invocation. You could have a function (or just a string) that always is called on each tool call, and returned as part of the JSON schema. As you can include whatever you want in a tool result, you can title this something like `constraints`. Optionally you can make an output schema and give that property a description too, but I'm not sure if that necessary helps.

The first two approaches rely on the LLM and [[20260326100028-ai-non-deterministic]], as mentioned by the below article. So you can't guarantee they'll be called correctly.

[[20250811104331-model-context-protocol-mcp]]

https://blog.modelcontextprotocol.io/posts/2025-11-03-using-server-instructions/

[[ai]]