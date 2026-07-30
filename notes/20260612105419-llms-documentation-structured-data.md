# LLMs & Structured Data

Tailoring information for agents is tricky. Structured data is definitely helpful, especially JSON (over Markdown), but it's still hard to know what needs to be communicated, and what's fluff. Because of [[20260318091849-ai-context-tokens]], it's best to remove as much bloat as possible. 

The difficult part of that is that most things have nuance, which is hard to capture in a black and white/exact manner. At what point are you tailoring your communication style for agents vs needing to change your guidelines. You can't create an instruction set to do everything perfectly, that's not how engineering works, that's not how product works, that's not how life works. There's a difference between a 'SHOULD' and a 'MUST', you can't just switch between them to make guidelines 'clearer'.
	**If a LLM cannot figure out the nuance of a SHOULD, what can you realistically do?**

I think there's a bit of a trap in 'writing for LLMs' too. There's multiple parts of that, and I think a lot of it makes information better for humans too, e.g:
- Better documenting things that are assumptions, or could be more explicitly explained
- Documenting shared knowledge that isn't actually written down anywhere
- Ensuring documentation is complete and not juxtaposing
- Making sure everything is correct, assuming it would be copied verbatim

After you've done all that, you may need to tweak structure/language for LLMs, but you've probably already gone a long way into improving AI output. A lot of what you improve for LLMs is improving it for users with less critical thinking or technical skill.

[[ai]]
[[documentation]]