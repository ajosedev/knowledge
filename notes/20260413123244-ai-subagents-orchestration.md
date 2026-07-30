# Orchestrating multiple AI agents

This is a good parallelisation strategy not just for efficiency, but also as a way of improving results by reducing context of your 'main' agent. [[20260318091849-ai-context-tokens]]. Specific agents have specific goals, with something above orchestrating them all, checking results, etc. The idea is to manage a 'team', rather than a single agent.

Copilot has the `/fleet` slash command which breaks down a complex request into smaller tasks and run them in parallel across different agents, maximizing efficiency and throughput.

Claude has something similar with 'Agent Teams'. All of these tools are ways of co-ordinating multiple agents to finish a task more efficiently, with one agent acting as the main coordinator.

I'm still working how you should do this best with OpenCode. #todo

I honestly see this is the responsibility of harnesses (and similar, like skills), rather than the responsibility of the engineer. As we take the human more and more out of the [[20260604045417-ai-software-development-loops]], it makes sense that. AI can figure out how to best orchestrate itself to achieve a goal.
[[20260413105415-models-and-harnesses]]

This also feels like something that's often changing as the tools evolve, standards change, etc.

https://addyosmani.com/blog/code-agent-orchestra/

[[ai]]