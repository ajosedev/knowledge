# Compound Engineering

The core philosophy of compound engineering is that each unit of engineering work should make subsequent units easier—not harder. It's an engineering practice that aims to use [[20250811123613-agentic-ai]] to teach the system new capabilities as you execute on work. The goal being that over time, the codebase becomes easier to understand, easier to modify, and easier to trust.

Compound engineering uses a four-step loop:
Plan (incl Brainstorm) → Work → Review → Compound → Repeat

Without the fourth step, it's basic software engineering with AI assistance. The loop should be used whether  you are fixing a bug in five minutes or building a feature over several days. You just spend more or less time on each step.

The plan and review steps should comprise 80 percent of an engineer's time, and work and compound the other 20 percent. In other words, most thinking happens before and after the code gets written.

In the Compound step, these are the actions you should take:
- **Capture the solution.** Ask yourself: What worked? What didn't? What's the reusable insight?
- **Make it findable.** Add YAML frontmatter to make sure it is tagged with the right metadata, tags, and categories for retrieval.
- **Update the system.** Add new patterns into CLAUDE.md, the file the agent reads at the start of every session. Create new agents when warranted.
- **Verify the learning.** Ask yourself: Would the system catch this automatically next time?

https://every.to/guides/compound-engineering

[[ai]]