# How agents invoke instructions

Most things are done automatically, but can be done manually.

For example, [[20260306121850-ai-agent-skills]] can be invoked by passing `/<skill>` in most harnesses. However they should also be invoked automatically, as harnesses will look at the metadata of the skill (namely the description), and invoke the skill as it interprets the prompts.

[[20250811104331-model-context-protocol-mcp]] is similar. Harnesses send a `tools/list` request which returns a list of tools and metadata for each. Then once again, the harness can pick the appropriate tool(s) for the job.

[[ai]]