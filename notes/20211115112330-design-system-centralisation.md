# Centralising patterns in a design system

When it comes to design systems, we think that once we've made a centralised pattern, no-one needs to make that UI effort again, it is 'solved'.

Much like non-UI code, abstracting too early can create a subpar solution that doesn't capture all the problems. Be comfortable with duplicating effort to better understand the problem and context.

>We have to diverge before we can converge, or we risk creating a solution that’s too constraining to be useful.

The [[20211115112656-rule-of-three]] is a good one to follow here. Before there are >3 solutions, you're not solving common problems. You're solving [[20220704125509-design-systems-snowflakes]]. Wait till there are more solutions, else you may create [[20221026123121-the-wrong-abstraction]].

---

#breakdown?
On a related note, there are benefits of moving patterns or components into the design system, even if it's known to be subpar or problematic. They shine a spotlight on them and their issues, which can be a useful first step in enacting change. Once something is in the design system you can still discourage its use, or even better, fix it in the design system and proliferate the changes out to the existing problematic uses.

https://amyhupe.co.uk/articles/should-design-sytsmes-include-anti-patterns/

[[concepts]]
[[designsystem]]
[[refactoring]]