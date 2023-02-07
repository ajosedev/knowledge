# Utility vs Semantic CSS

Frameworks like Tailwind get *heated*, for some valid reasons and some less valid reasons. Which is better between [[20230126095251-utility-first-css]] and [[20230130095710-semantic-css]]? As always the answer is nuanced.

Additionally when reading Semantic CSS, reading a class for the first time doesn't communicate useful information. `.page-heading` doesn't tell the developer what's happening.

Semantic CSS often means you're creating isolated components first. You're adding custom selectors to achieve a style in this particular context. Once you figure out those styles need to be shared, you've already encapsulated them into a certain area. Sharing them from this context-specific is often difficult, and leads to duplication, or class refactoring.

There's a difficult coupling between the DOM markup and the CSS selectors. Often if one needs to change, so too does the other. This is also true when creating variants - what if your `.card` styling needs a slightly different image size, but only sometimes? Methodologies like [[20220822111358-bem]] aim to improve this, but it leads to its own problems around verbosity.

However, Utility-first CSS has some maintainability concerns depending on how you use it. You don't want to add 30 classes to every DOM element you create. You also don't want people applying their best guess at styling every time they create an element.

I haven't extensively used Utility-first CSS, but it seems like it greatly improves the first-time creation of a page. However, people lean into that too hard, which makes maintainability worse once you have 30 classes on everything. It seems like a better tool once you plan a little bit first.
The key for me seems to be [[abstraction]]. 

A combination of utility and semantic classes seem to make the most sense. In a [[designsystem]] world (or a [[20211129114322-atomic-design-primer]] world), having base atoms makes sense to help you build larger organisms. Don't apply individual classes directly, create components in your preferred language to apply them for you (e.g. `Button` applies all the CSS needed to create a button).

Don't use `mt-8`, use something like `mt-s` - have abstractions around design tokens, and still try to keep your code [[20200307105301-dry]].

Having an entire semantic class just to set a margin seems like too much. However not having a semantic class (or component) for a reusable pattern also doesn't make sense. Horses for courses. 

https://nicolasgallagher.com/about-html-semantics-front-end-architecture/
https://adamwathan.me/css-utility-classes-and-separation-of-concerns/
https://frontstuff.io/in-defense-of-utility-first-css
https://www.builder.io/blog/the-tailwind-css-drama-your-users-don%27t-care-about
https://mxstbr.com/thoughts/tailwind/
https://dev.to/jaredcwhite/why-tailwind-isn-t-for-me-5c90
https://www.zeldman.com/2017/01/03/kiss-my-classname/

Keywords: utility CSS, semantic CSS, functional CSS, atomic CSS

[[api]]
[[css]]