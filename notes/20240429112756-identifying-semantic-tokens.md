https://blog.damato.design/posts/truly-semantic/

#todo

April 16, 2024

<aside> 💡 Can I publish this doc somewhere? Might need to ‘censor’ it a little bit.

</aside>

[https://vistaprint.atlassian.net/wiki/spaces/DesignSystemTeam/pages/3695088248/Checklist](https://vistaprint.atlassian.net/wiki/spaces/DesignSystemTeam/pages/3695088248/Checklist)

[https://vistaprint.atlassian.net/wiki/spaces/DesignSystemTeam/pages/3693904154/Decision+log](https://vistaprint.atlassian.net/wiki/spaces/DesignSystemTeam/pages/3693904154/Decision+log)
https://vistaprint.atlassian.net/wiki/spaces/DesignSystemTeam/pages/edit-v2/3679814224

A small check-in of where we are, and where we need to get to.

## Problems

Iteration is important, and we are getting to a better solution. However, there’s a finite amount of time. **The hard part is we can keep making changes to how the architecture is created, but if we don’t have clear rules and clear understanding of why things are working and things aren’t working, we’ll go in circles.**

As always, none of this is an indictment or attack on anyone. This is a retrospective as our work as a team.

The goal now is to make things as rote as possible - if x, do y. Tokens are a bit more of an art than a science, but this is what we should strive for. Instead of needing certain people around to make decisions, you can reference a document, even as a starting point.

For this, I think we mainly need rules on how to generate tokens, which can potentially be worked backwards from what rules we have on tokens generally.

## Takeaways

The main takeaways across all our iterations/approaches:

- Test test test. Don’t want till things are perfect, because every plan (architecture) fails when it gets punched in the face (try to implement in code)
- Sync time is slow, but valuable. Share early and share often. Ensure regular check-ins to make easier decisions as a team, and focus on key areas at a time.
- Try to avoid things being up in the air and not down on paper.

## Iterations

We spent a lot of time understanding the current system, which identified problems to look out for.

First was the exploration into the naming structure

This was helpful, but we were perhaps trying to perfect something that we didn’t really know about. It was almost inorganic - make a perfect naming system, and then try to fit tokens to it.

Pitfalls

- We didn’t really know what we were creating
- Didn’t have a great landscape of the existing token architecture as to how it was applied in code

Takeaways

- Don’t try to perfect something before testing it
- Consider tackling problems from bottom-up and top-down simultaneously, to ensure you’re not getting stuck in the weeds

Our first explorations were done individually. Each of us took a token category and explored what the new tokens could look like, focusing on base and alias tokens.

This was generally useful, but we didn’t have a solid guiding ethos or rules to make tokens with. This led to us having a distinctive approach per token type, which while helpful for exploration, we never consolidated

Pitfalls

- Inconsistent API
- Everyone had a different ideas of the rules, meaning some categories were very different
- Unclear ‘done when’, meaning some token categories had more thought than others
- Depending on the owner, bias towards different things seeped in

Takeaways

- It’s useful to explore individually, but it’s important to consolidate as a group at the end
- Probably could have used more regular check-ins - sync time is generally slow and difficult, but incredibly valuable
- Maybe didn’t need to do so many token types

Our latest approach was to create consistent component categories and use them across token types.

Component categories are: navigation, action, control, input, container, informational, content

Pitfalls

- Bloat - too many tokens needed to be created, especially for common decisions like states.

Takeways

- These categories are still useful if they are necessary.
- Categories will change per token type, else it will lead to redundant work.
- Too many tokens makes it difficult to use. Consider seeing where we can trim the fat.
- When applying these to code (even for token categories that weren’t finalised), many learnings and unknowns were quickly discovered.



From https://blog.damato.design/posts/truly-semantic/:

> In this way, I like to create categories of components. For example, all components where we expect a user to provide input to the system could be called “control” components which would suggest a family of tokens that are meant to style controls similarly. From here, we would get semantic tokens such as `control-borderColor` which might describe the `<input/>` border.

> While you could become more specific, this tends to cause treatments to be more unique. As an example, would you expect `textInput-borderColor` to be different from `checkbox-borderColor`? Probably not. So the exercise of identifying similar atomic components is important to determining your semantic token set. These similar components are grouped into generic categories (eg., non-interactive surfaces, actions, controls, etc.) which form the foundation for your tokens.

> A semantic token can be added or removed from the ecosystem without having to rethink other tokens within the same category. On the other hand, if you have a token called `space-sm` and another called `space-md`, you’ll be unable to introduce another token between them without introducing something unexpected and not systematic. So a good rule of thumb is that semantic tokens do not include a scale. The scale suggests that there are other tokens above and below that could require tokens to be inserted between these over time.
- We did this though. Why?
- However in general we're also using 'standard', which is kind of a pseudo-ordinal
- Are we using this as a pseudo-ordinal? could we rename things to primary/secondary/tertiary instead of sm/standard/lg?


Things like semantic colours for cross-cutting areas has already been helpful too. e.g. one for accent or help

Assigning categories per token type has been useful. e.g. border has a category for partitions, shadow has one for 'floating'
	Some of these start to span across categories, but they don't have to

Make sure you're actually adding semantics
	Semantic scale has been interesting in this regard

Not referencing the tier 1 directly at all in CSS
	Instead, increase the visibility of these exceptions by creating component tokens just for this
	Part of making component tokens as needed, rather than for everything
	But of course component tokens matter more around if you have multi-platform too

Setting component level tokens at the class level as mentioned in [[20231215081938-css-variables-flow]]
	When is it actually necessary, maybe only if you're changing their values/these tokens rely on other component level tokens that change
	Assuming everything is static (i.e. changes in mode, but nothing else) I think it might be fine to have these higher up the tree

**Goes back to the idea that tokens are not CSS variables**. That's a platform-specific way of implementing them. As such, conflating the two starts to become confusing in terms of inheritence and calculations.
	Tokens can change, but at controlled places, such as a mode, or in a theme. They shouldn't dynamically change to support an implementation detail, such as the background colour across different statuses.
	e.g. `comp.alert.bg.error` can be a token that represents the chosen colour for the error state bg. `comp.alert.bg` may not be a token (its closer to a variable) that dynamically changes depending on the class name.
	Note this is mentioned in [[20231215081938-css-variables-flow]] too

Inverse tokens/'on dark' vs tokens that automatically switch is still a little tricky.
I think I prefer the latter - the decision is built into the token, and it adjusts based on the context it is in. Even if it's just a small section of a page, it can still be a 'theme' or 'mode', and the tokens should react appropriately.
Otherwise the amount of tokens you need quickly balloons - what if you need a on dark checkbox, and then later an accodrion, and then later a...
https://blog.damato.design/posts/ondark-virus/
One part that gets tricky with this is when you need a 'static' token, e.g. a token that doesn't switch in modes.
	Usually this is a smell of a larger problem, you often only need a static token when you have something else that is not context-aware, e.g. the background doesn't change enough to support an opposite primary text colour.
	Currently using component tokens for these, to increase visibility of it being a problem.



1. Create **base** tokens that represent the available values to choose from. Consider if the base token needs to exist, if it will only ever be used in one place and doesn’t need to be public for consumers.
    
2. Create generic **semantic** tokens for **scale** (e.g. sem.color.border.strong, sem.color.border.subtle, etc.) that pull from **base** tokens. These will often exist regardless of more specific semantic tokens, and aims to provide a balance between amount of tokens and ease of use.
    
    1. This is also true for **states** - create generic state tokens such as disabled, or selected, as applicable (e.g. sem.color.border.disabled)
        
3. Identify opportunities for more specific **intent/concept** **semantic** tokens that pull from **base** tokens, where the intent/concept will always change together (e.g. sem.elevation.overlay, sem.color.border.input, sem.border.radius.action). Not every category will have a token for every [intent/concept](https://vistaprint.atlassian.net/wiki/spaces/DesignSystemTeam/pages/3679814224/Token+Guidelines?focusedCommentId=3732111468#Naming).
    
    1. This is also true for **states** - create states that are expected to change or will need to change based on the default state changing (e.g. sem.color.border.action.hover)
        
4. Create **component** tokens when there are exceptions, as mentioned above. These can map to a **semantic** token or **base** token, but will need to handle modes uniquely if they are not already handled.


Increased granularity increases flexibility but decreases usability, and we’re trying to find the middle ground. We want to ensure decision-making is easier, and although an infinite amount of tokens would make change easier, it would make general usability much worse. We’re optimising for the looming visual language, but not closing any doors for moves in the future with future visual languages. There’s a risk in future-proofing solutions that are [never used](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it).

As mentioned above, we want to reach for the most semantic token possible. However, not every use case can have a semantic meaning that isn’t liable to change, so we should aim to prioritise semantics, but allow for options with more freedom. We may not get this exactly right, but the goal is to not close any doors, and minimise breaking changes we’ll have to make in the future. For this reason, tokens shouldn’t be based on current visual appearance, but rather a categorisation of tokens that will always be linked together. We considered separating this out into two tiers: ‘scaled’/'global' and ‘specific’ - however we reasoned that having a four-tier architecture would add more confusion than it’s worth (as well as not follow industry standards), and instead decided to emphasise specific tokens over scaled tokens, all within the same tier.

As a general rule, states can quickly balloon the amount of tokens. If many tokens share the same values for different states, consider that a smell that the token splitting isn’t correct.