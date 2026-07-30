# Harness engineering

**Harness engineering** is the hot new buzzword. The fancy one-liner to explain is:
	Agent = Model + Harness

A decent model with a great harness beats a great model with a bad harness. A model itself cannot execute code, maintain state, setup environments, learn, etc. That's where the harness comes in. It includes things like [[20260306121823-ai-instructions]], [[20250811104331-model-context-protocol-mcp]] servers, orchestration logic (subagents, handoffs), bundled infrastructure, observability, memory, etc. It's the structure around the model which makes it smart, lets it handle errors, lets it realistically work.

Claude Code, Cursor, Codex, they're all harnesses. They wrap a model and give it purpose and behaviour. Taking something less intelligent and giving it more business value.

Issues with AI should not be immediately blamed on the model. Instead think of it as a configuration problem, something that can be improved with harness engineering. This goes into the 'whack a mole' behaviour I sometimes used to describe AI engineering, but it's about codifying it. Every mistake should become a rule. Every fix becomes codified.

This is also why harness engineering is a discipline rather than a framework. The right harness for your codebase is shaped by your failure history. You can’t just copy someone else's. You slowly build one up with business rules, what 'good' looks like, pitfalls to avoid, etc. That's the role of the human in harness engineering.

Harnesses extend what a model can do. Models will get better, yes. But then what the harness does shifts and grows with the model. Its purpose does not go away, just the responsibilities change.

https://addyosmani.com/blog/agent-harness-engineering/
https://www.salesforce.com/agentforce/ai-agents/agent-harness/
https://martinfowler.com/articles/harness-engineering.html
https://www.anthropic.com/engineering/harness-design-long-running-apps
https://www.langchain.com/blog/the-anatomy-of-an-agent-harness

[[ai]]