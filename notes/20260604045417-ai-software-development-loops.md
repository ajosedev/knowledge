# Software Development loops with AI

Software engineering has two loops:
- The **why** loop, turning ideas into working software
- The **how** loop, the actual code, tests, tools, and infrastructure. Also may involve things like [[20251121030453-rfc]] and [[20251121030429-adr]]

AI is changing the way we are involved in these loops. While previously humans were responsible for all of this, there's a shift towards engineers handling only the 'why' loop. In some capacity, we don't care about the how loop. It's means to an end. However, this quickly starts to get into the risks mentioned in [[20260601032608-vibe-coding-dangers]].

In theory we don't care about things like internal quality, we care about the ability to update, add features, maintain, etc. We care about external quality sure, but if you said that AI doesn't care about internal quality, what value does it have? We can vibe code our way out of a vibe coded hole.
Except, AI does care about internal quality. There's more and more evidence that quality of a codebase helps AI make changes more rapidly and accurately.

We also don't want to be a bottleneck in the how loop. Reviewing every line of code takes time for a human, and we need to figure out where we trust AI and where we don't.

Therefore it starts to make sense for humans to exist **on the (how) loop**. This gets into ideas like [[20260413103002-ai-compound-engineering]] or [[20260601095556-types-of-ai-engineering]] or [[20260528095327-ai-sdlc]]. Managing how the how loop works, but not directly involved in the loop as to not slow it down. Rather than changing the artifact as part of the how loop, we change the way the artifact is produced, to make it better in the future. A [[20220627113731-flywheel-virtuous-loop]] effect.
In the future, this could maybe shift more towards the AI's responsibility too.

https://martinfowler.com/articles/exploring-gen-ai/humans-and-agents.html

[[20260528095327-ai-sdlc]]
[[20220627113555-software-development-lifecycle]]
[[20260601032608-vibe-coding-dangers]]

[[ai]]
[[engineering]]