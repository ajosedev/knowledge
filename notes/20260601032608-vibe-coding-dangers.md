# The dangers of vibecoding

It's important to use AI responsibly. While it has sped up the time to create code, it's still important to understand how much you can trust the output.

This Thoughtworks article proposes a risk assessment based on three factors:
1. Probability - how likely is AI to go wrong?
	Does it have the necessary context, is the use case AI-friendly, is there prior art?
2. Impact - if AI gets it wrong, what are consequences?
	Is this for a spike, or production code? Would you ship this if you were on call? What are you shipping this as part of, internal tooling, or straight to customers? Does this thing impact something that makes money?
3. Detectability - will you notice AI gets it wrong?
	Do you have good tests? Will you notice it breaks in production? 

https://martinfowler.com/articles/exploring-gen-ai/to-vibe-or-not-vibe.html

[[ai]]
[[deployment]]
[[engineering]]