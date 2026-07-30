# Loop engineering with AI

>**Loop engineering is replacing yourself as the person who prompts the agent. You design the system that does it instead.** A loop here can be thought of a recursive goal where you define a purpose and the AI iterates until complete

A loop needs 6 things:
1. **Automations** that go off on a schedule and do discovery and triage by themselves.
2. **Worktrees** so two agents working in paralell dont step on each other.
3. **Skills** to write down the project knowledge the agent would otherwise just guess.
4. **Plugins and connectors** to plug the agent into the tools you already use.
5. **Sub-agents** so one of them has the idea and a different one checks it.
6. **Memory** (markdown, JIRA board, etc) that holds what's done and what is next

| Primitive                | Job in the loop                  | Codex app                                                                                                                                                                      | Claude Code                                                            |
| ------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| **Automations**          | discovery + triage on a schedule | [Automations tab](https://developers.openai.com/codex/app/automations): pick project, prompt, cadence, environment; results land in a Triage inbox; `/goal` for run-until-done | Scheduled tasks and cron, `/loop`, `/goal`, hooks, GitHub Actions      |
| **Worktrees**            | isolate parallel features        | Built-in worktree per thread                                                                                                                                                   | `git worktree`, `--worktree`, `isolation: worktree` on a subagent      |
| **Skills**               | codify project knowledge         | [Agent Skills](https://developers.openai.com/codex/skills) (`SKILL.md`), invoked with `$name` or implicitly                                                                    | [Agent Skills](https://addyosmani.com/blog/agent-skills/) (`SKILL.md`) |
| **Plugins / connectors** | connect your tools               | Connectors (MCP) plus plugins for distribution                                                                                                                                 | MCP servers plus plugins                                               |
| **Sub-agents**           | ideate and verify                | [Subagents](https://developers.openai.com/codex/subagents) defined as TOML in `.codex/agents/`                                                                                 | Task subagents in `.claude/agents/`, agent teams                       |
| **State**                | track what’s done                | Markdown or Linear via a connector                                                                                                                                             | Markdown (`AGENTS.md`, progress files) or Linear via MCP               |

Automations are the crux of this. It's the thing that makes it a loop, and not just a process run once. The most useful structural thing in a loop, by far, is splitting the one who writes from the one who checks.

Even with a loop, the verification is on you. [[20260625012124-ai-code-review]]

[[20260625104409-comprehension-debt]]
[[20260604045417-ai-software-development-loops]]
[[20260528095327-ai-sdlc]]

https://addyosmani.com/blog/loop-engineering/

[[ai]]
[[engineering]]