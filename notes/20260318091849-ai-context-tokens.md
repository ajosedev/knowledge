# Context windows & tokens

The context window is everything the model can see when generating a response. It includes the conversation history, file contents from your workspace, tool outputs, custom instructions, and any references you add explicitly. The model can only reason about what it can see, so providing relevant context is one of the most effective ways to improve AI responses.

Everything it knows about your task comes from the context assembled for the current request, so it's important to manage context effectively. Context is gathered through [[20260306121823-ai-instructions]], both system and custom, conversation history, implicit context, explicit references, and tool outputs.

**Generally speaking, as the context fills, LLM performance degrades.**

Tokens are effectively words, with each word (ish) represented by one token. The limits of context windows are usually stated in tokens. GPT-3 supported ~4k tokens, but now Claude supports ~200k tokens. As token count grows, accuracy and recall degrade, a phenomenon known as _context rot_. This makes curating what's in context just as important as how much space is available.

When you approach the limits of a context window, compaction is often used, to summarise and condense earlier parts of a conversation. The more I work with AI, the more I appreciate how important context and context management is. Regardless of new models being created, managing context is key to avoiding using too many tokens, issues with context rot which leads to insufficient results, etc. This ties into [[20260601095556-types-of-ai-engineering]] and [[20260413105415-models-and-harnesses]]. As well as techniques like [[20260413123244-ai-subagents-orchestration]] and [[20260601101703-ai-one-task-per-session]].

Different AI tooling can help with managing context in different ways. e.g. [[20260306121850-ai-agent-skills]] help by using progressive disclosure, [[20260306121823-ai-instructions]] should be kept lean to avoid bloating context.

A new Google whitepaper uses the following types of agent context: instructions, knowledge, memory, examples, tools, guardrails.

[[ai]]