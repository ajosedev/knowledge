# A guide to problem solving at large

Software engineering is about problem solving. That's the core of it, not writing code, but solving problems.

It's tricky to find the balance of solving difficult problems yourself, vs tapping into the knowledge font of your team. Especially if it's an issue you're confident others know the answer to. Remember every problem to solve is an opportunity to learn, so don't give up too early.

To figure out a problem, follow the following structure:
1. Try to figure out the root problem. Using [[rootcauseanalysis]] tools at your disposal such as [[20231006045323-five-whys]] are a great start.
2. Form a hypothesis. Using the evidence, your intuition, and tools like Google, form a theory on what you think the problem is
3. Test your hypothesis. Prove or disprove your theory. You don't necessarily need to fix the problem with your first hypothesis. This is an iterative process.

When you hit a wall, take a second and think through the problem again:
1. Read the error. Don't skim it. Read it fully.
2. Google the error. See what other people say. Usually someone has seen this before, you just have to find it.
3. Figure out what's changed. If the error is new, what made it show up?
4. Isolate the problem. How do you reproduce it? Write a test for it. Rubber duck it. Simplify by removing code. Drill down to the smallest reproduction you can.
5. Follow the hypothesis structure again. Form a new hypothesis and re-run the loop.

When you're truly stuck, that's usually the time to call in some extra help. When you've run out of ideas, or spent too long on the problem, ask the team. When you do so, it's super important to provide context:
1. The goal
2. The problem
3. What you've tried
4. Where you're stuck

If you can't articulate these well, you might be asking for help too early.

[[20240223105141-mentoring-answer]]

[[career]]
[[communication]]
[[engineering]]