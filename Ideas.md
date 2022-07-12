Node modules

- Should be transpiled when publishing them
	- i.e. have .js and .d.ts
- Webpack will not transpile them by default
	- And should not, since that's a waste most of the time
- If a node_module is written in typescript, you have to explicitly transpile it
	- Usually omitting it from skipping node_modules with special regex

---

node modules in production and devdeps vs deps

- using a bundler further confuses this
	- I think once you have webpack and make a bundle, your dependencies should already be handled so you no longer need them?
- frontend is different to server side
- why does nextjs install it on the server?
	- SSR?
- devdeps vs deps may be an outdated concept
- what about a depdendency like 'react' or 'express'?

https://www.reddit.com/r/node/comments/b5eicg/do_i_still_need_node_modules_folder_after_running/
https://jsramblings.com/do-dependencies-devdependencies-matter-when-using-webpack/
https://github.com/webpack/webpack/issues/520

---

Test in production
https://increment.com/testing/i-test-in-production/
Canaries, feature flags, multi-tenancy(?)

---

something on React contexts on how to best make them
- they re-render on object.is evaluation
- therefore put state somewhere that checks it better so it doesn't get re-created on each one
- reducer better as it's safe/doesn't cause rerenders? (link to relevant zettel)
- 'context module' pattern? (another  zettel?)

See what Epic React has here

https://kentcdodds.com/blog/how-to-use-react-context-effectively

---

don't preoptimise useMemo/useCallback
https://kentcdodds.com/blog/usememo-and-usecallback

---

Primer on microfrontends
  https://increment.com/frontend/micro-frontends-in-context/

Microfrontends help with ownership, and in turn help with scale.
Feature teams can be responsible for their own microfrontend and piece them together at the end.

Each team has less of an impact on other teams, for better DX. Often better build times too.

Siloed changes help increase maintainability too.

[[20220628012817-microfrontends]]

---

Splitting microfrontends horizontally vs vertically
Horizontal: one view into multiple parts which may or may not be owned by the same team
Vertical: each business domain to a team. Helps teams become domain experts

Generally best to model microfrontends around a business domain

  https://increment.com/frontend/micro-frontends-in-context/

---
Microfrontend composition

![](https://images.ctfassets.net/3njn2qm7rrbs/1iIsrWJqun33INDnvRtBuo/43c58e7189c794f1f4ad4e57873ba807/composition-2000-62f5a766.jpeg?w=1000)

  https://increment.com/frontend/micro-frontends-in-context/

---

Control props (Epic React)
https://github.com/kentcdodds/advanced-react-patterns/blob/main/src/exercise/06.md
[[react]]
[[reactapi]]

---

Context Module Functions (Epic React)
https://github.com/kentcdodds/advanced-react-patterns/blob/main/src/exercise/01.md
[[react]]
[[reactapi]]

---

b2b, b2c, c2c, etc
[[business]]

---

saas, paas, iaas
[[business]]

---

domain driven design
[[architecture]]
https://martinfowler.com/bliki/DomainDrivenDesign.html

---

However you need to also break out of the design system
1.  Consistency becomes **monotony** and we lack variety and intent in our solutions.
2.  **Speed is overrated** and the momentum hinders teams from building outside the bounds of the system.
3.  Designers and developers become **imprisoned** within the system boundaries.
"If your user needs a solution that is very specific and unique, you can’t let the system hold you back.

"The system defines solutions" -> "Solutions define the system"

01

Remember that form follows function


You’ll want to have a strong, rational case when you start sharing those ideas with your team.

02

Don’t create silos


Designers who are generalists tend to be more successful when breaking the system. When you’re thinking about all aspects of the experience — UX, copy, motion, visuals — you have more control over making it all work together to deliver magical moments. 

03

Acknowledge the machine


Bring technology into every step of the process (whether you are a designer who knows how to code or you simply understand the importance of bringing engineers from day one) —that way you have better chances of landing on signature moments that are feasible, viable, and accessible.

Break out of your design system
https://breakyourdesignsystem.com/

---

design system contributions

Some ideas for encouraging contributions
https://medium.com/wayfair-design/contributing-to-our-design-system-at-wayfair-46fb5593e207

---

Debugging why emacs hangs typescript

Due to flycheck (+ eslint?)
`flycheck-perform-deferred-syntax-check` seems to take a while on first load
If disabling flycheck globally, opening files is quick

```lisp
;; fix flycheck init load times due to flycheck-perform-deferred-syntax-check
;; this in turn runs `eslint --print-config` which can be slow
(with-eval-after-load 'flycheck
  (advice-add 'flycheck-eslint-config-exists-p :override (lambda() t)))
```

---

Writing wrappers around external libraries to enable change in the future

Keep consumers agnostic

https://levelup.gitconnected.com/why-you-should-often-wrap-your-dependencies-5fced2999616
https://www.google.com/search?q=wrap+third+party+dependencies+npm+pattern&client=firefox-b-d&ei=uvZMYoK-AuaPseMPg5GmuAs&ved=0ahUKEwiCg4H-rf72AhXmR2wGHYOICbcQ4dUDCA0&uact=5&oq=wrap+third+party+dependencies+npm+pattern&gs_lcp=Cgdnd3Mtd2l6EAMyBAghEBU6BwgAEEcQsAM6BQgAEJECOgQILhBDOgsILhCABBCxAxCDAToLCAAQgAQQsQMQgwE6DgguEIAEELEDEMcBEKMCOhEILhCABBCxAxCDARDHARCjAjoRCC4QgAQQsQMQgwEQxwEQ0QM6BAgAEEM6CgguELEDENQCEEM6BwguELEDEEM6BwgAELEDEEM6CwgAELEDEIMBEJECOggIABDJAxCRAjoLCC4QxwEQrwEQkQI6CAgAEIAEELEDOgUIABCABDoHCAAQgAQQCjoGCAAQFhAeOggIABAWEAoQHjoJCAAQyQMQFhAeOgoIABANEAUQChAeOggIABANEAUQHjoICAAQgAQQyQM6CAguEIAEENQCOgsILhCABBDHARCvAToICAAQCBANEB46BAgAEA06BggAEA0QHjoHCCEQChCgAToFCCEQoAE6CAghEBYQHRAeSgQIQRgASgQIRhgAUOEpWPxjYN9kaAlwAXgAgAHdAYgB0kOSAQYwLjUwLjOYAQCgAQHIAQjAAQE&sclient=gws-wiz

[[etc]]

---

Using objects as oppose to multiple parameters
Cleaner code
Don't have to pass 'undefined' or 'null' for arguments you don't care about
Position ceases to matter

[[concepts]]

---

Void vs undefined in Typescript

https://stackoverflow.com/questions/58885485/why-does-typescript-have-both-void-and-undefined


---

Layout modes in CSS

Think about what layout mode you're applying properties for CSS to start to make more sense. e.g. `z-index` isn't applicable in a flex layout. `width` behaves differently in a flex layout vs flow layout.

https://www.joshwcomeau.com/css/understanding-layout-algorithms/

[[css]]

---

pre-mortem and post-mortem

[[engineering]]
[[product]]

---

auto layout in Figma doesn't have the concept of wrapping
as of 20 Apr 2022

---

gridless.design

TODO - figure out how this intersects with a 'intrinsic layout' doc. Is there a 'why breakpoints are bad' doc?

Grid refers to the n-column grid designers use, not something like CSS Grid

Originally created for print, where the content and the layout are connected together. Don't have to deal with different screen sizes, font sizes, zooms, dynamic content, etc.

Designers design with specific breakpoints and dimensions. Sometimes these are multiple, but they don't show the in-between sizes.

Goes against [[responsivedesign]] sometimes, but definitely always goes against [[intrinsiclayout]]

"Layouts shouldn’t shift because of the device size, it should shift due to the content not fitting in the current layout."

Using min/max width with margin: auto works well instead of adhering to a grid. e.g. page gutters can grow and shrink as needed but the content will stay the same size until it needs to change.

CSS Grid can better replicates the n-column grid, but only affects its direct descendents (until subgrid (TODO - link)). Paradoxically, CSS Grid shines in creating intrinsic layouts, allowing for content to wrap to new rows, dynamic column sizes, extra flexibility, etc.

Elements don't equally shrink together. Using a n-column grid means that every column shrinks and grows equally. Often more consideration is required, such as shrinking down the gap between them.

Given a layout of text (3 columns), gap (4 columns) and an image (7 columns), shrinking the viewport size will immediately make the text wrap more before the gap is relatively shrunk. Some elements scale, other element's shouldn't.

Usually the content needs to be prioritised, where as n-columns consider everything equal.

n-column grids work as good guides, but there's more to consider as part of the handoff.

[[css]]
[[design]]
[[intrinsiclayout]]
[[responsivedesign]]

---


Intrinsically responsive layout

aka Intrinsic Layout, or Instrinsic Web Design, or 'The New Responsive'

e.g. don't use media breakpoints

- breakpoints are generally bad
- doesn't fit with dynamic content
- intrinsically responsive
	- That is, it will wrap and reconfigure internally to make sure the content is visible (and well-spaced) to fit any context/screen.
	- You may feel compelled to add @media query breakpoints, but these are considered “manual overrides” and Every Layout primitives do not depend on them.
	- works better in a component world
- Avoid magic numbers
- CSS Grid intrinsic layout?
- "The problem with this approach (media breakpoints) is it goes against content-first design"
- "Content should be dictating the layout and layout should adjust to the available space. This means that smaller components of the page need to respond to the size of their closer ancestors. Changing the layout of buttons in a card isn’t because the page size is small, it’s because the card size is small."
- resizeObserver helps here



https://gridless.design/for-developers

[[intrinsiclayout]]
[[responsivedesign]]

---

intrinsic/extrinsic web design

how does this interact with designer columns

how does this interact with 'declarative design'?

https://adactio.com/journal/18982

> Be the browser’s mentor, not its micromanager.

>We say CSS is “declarative”, but the more and more I write breakpoints to accommodate all the different ways a design can change across the viewport spectrum, the more I feel like I’m writing imperative code. **At what quantity does a set of declarative rules begin to look like imperative instructions?**

>They all focus on creating the right _inputs_ rather than trying to control every possible _output_. Leave the final calculations for those outputs to the browser—that’s what computers are good at.

---

Declarative vs Imperative design systems

Following on from the ideas of 'declarative design' or the methodology used by intrinsic/extrinsic design (TODO - links), is the idea of 'declarative design systems'.

>If these buttons were in an imperative design system, then the output would be the important part. The design system would supply the code needed to make those buttons exactly. If you need a different button, it would have to be added to the design system as a variation.

>But in a declarative design system, the output isn’t as important as the underlying ruleset. In this case, there are rules to create the components. Rules that create a coloured button with states when a single colour is given. Think of programmatic lightening/darkening rather than a custom tint/shade for your colour palette.

>If you’re approaching a design system with an imperative mindset then “correct” means “exact.” With this approach, precision is seen as valuable: precise spacing, precise numbers, precise pixels.

>But if you’re approaching a design system with a declarative mindset, then “correct” means “resilient.” With this approach, flexibility is seen as valuable: flexible spacing, flexible ranges, flexible outputs.

>These are two fundamentally different design approaches and yet the results of both would be described as a design system.

https://adactio.com/journal/19131

---

`as const` / const assertions

https://stackoverflow.com/questions/66993264/what-does-the-as-const-mean-in-typescript-and-what-is-its-use-case

Useful for creating an object and narrowing the types. e.g.
```ts
type Space =
    | '1bu'
    | '1.5bu';

function DoSomethingWithSpace(space: Space) {
    return;
}

const semantic = {
    cardPadding: '1.5bu',
} as const;
```

Without the `as const`, the return type of `semantic` is
```ts
const newSemanticObject: {
    cardPadding: string;
}
```

To get the return type to be `Space`, `Record<string, Space>` can be used, but this makes the key type a generic string rather than `cardPadding`. This in turn causes issues with `noPropertyAccessFromIndexSignature`.

Using `as const`, we get a narrow type for the value, which means it falls within the `Space` type.

However, you do lose the typechecking when creating the object that `Record` offers.

[[ts]]

---

inline elements + line boxes
already existing page on this? [[20210806121648-line-boxes-css]]

https://stackoverflow.com/questions/28363186/inline-elements-and-line-height

---

vertical-align + inline-flex
already existing page on this? [[20210726164300-line-height-css]]?

https://stackoverflow.com/questions/48117071/element-with-display-inline-flex-has-a-strange-top-margin

---

layout algorithms

https://www.joshwcomeau.com/css/understanding-layout-algorithms/

[[css]]

---

reakit offers render props, `as` prop, and a hook API

---

concurrent react

[[react]]

---

CSS Grid(?) &
CSS Subgrid

https://ishadeed.com/article/learn-css-subgrid/

---

min-content, max-content, fit-content, etc
e.g. width: fit-content

---

React SSR

---

Notes from Every Layout & Pragmatic Programmer

---

Explainer on how colours are not perceived by humans 1:1
Different hues have different perception of brightness
	Is this 'luminance'?
	Not lightness.

Where did I read this? - Refactoring UI maybe?
Is this why people prefer HSL?

How does Google's HCT work with this? https://material.io/blog/science-of-color-design

---

useEffect

TODO - general primer on useEffect?

[[react]]

---

Reflection

[[concepts]]

---

Design system happiness

https://zeroheight.com/blog/what-makes-a-happy-design-system-team/

---

Mitch general advice:

-   Don’t always say ‘no’. Rephrase it as ‘what can we do better?’ Think about next steps, re-frame it as an additional/different thing to do to achieve similar goals.
-   Positive spins! Don’t just shut ideas down
- Think of it as problem solving

---

Team models for scaling a design system

https://medium.com/eightshapes-llc/team-models-for-scaling-a-design-system-2cf9d03be6a0
Salesforce creates a fourth 'cyclical model' https://medium.com/salesforce-ux/the-salesforce-team-model-for-scaling-a-design-system-d89c2a2d404b

---

JS prototypes/prototype inheritence

Also JS classes and how they differ

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

---

React reconciliation

---

Pragmatic Programmer notes [[Pragmatic Progammer]]
Especially on estimation

---

Service workers, SPAs, MPAs, PWAs, and more

---

depcruise

https://github.com/sverweij/dependency-cruiser

needs typescript installed at the same spot dependency-cruiser is installed

e.g.
```
depcruise --ts-pre-compilation-deps \
--ts-config "tsconfig.base.json" \
--exclude "^node_modules" \
--collapse "^libs" \
--progress \
--output-type dot \
apps/spa/src/pages/browse-projects/JobListingsPage \
| dot -T svg > dependencygraph.svg

```

Need the typescript flags sometimes too

Different filtering options: doNotFollow, includeOnly, focus, exclude, collapse, maxDepth
https://github.com/sverweij/dependency-cruiser/blob/develop/doc/options-reference.md#filters

--progress flag is helpful

if `dot` is wanted, `brew install graphviz`

---

barrel files

https://github.com/basarat/typescript-book/blob/master/docs/tips/barrel.md
related to [[20210726162517-default-exports-js]]

---

pragmatic vs dogmatic vs ??

---

users are good at finding problems but bad at offering solutions

>If I’d asked customers what they wanted, they would have said “a faster horse”.
>- Henry Ford

---

CSS precedence basics

Answer the question: if two classes of the same specificity are applied to an element, which takes precedence?
	Answer: the styles declared later in the stylesheet

---

CDK, CloudFormation, Fargate, Lambda, etc.

Maybe first start on just CloudFormation + CDK?

Link Cloudformation article from [[20220627112853-infrastructure-as-code]]

---

Handling breaking changes in Microservices
Also relies to Module federation?

---

>It is tempting to build abstractions so developers have to do less and build more. However, this can easily end up causing frustrations with developers if not done right.

>In summary, the web is uneven across at least three dimensions: Level of abstraction, API design and availability/behavior across browsers. It’s all really lumpy.

>The Web Platform exposes many API surfaces of different sizes and with different levels of abstraction.

>Of course, there are still gaps and shortcomings in the platform, and those are often addressed through libraries or frameworks, which I will group under the term “abstractions”.

>**I get frustrated whenever I have knowledge (specifically Web Platform knowledge) to solve a problem, but the abstraction prevents me from using my knowledge.**

>This made me realize something counter-intuitive: While the uneven shape of the Web Platform may seem like a major source of friction, it’s likely that the developer has already learned and mastered it. If developers are _forced_ to use an abstraction instead of their pre-existing skills, it might not feel like a net positive for them.

>Abstractions are usually designed for a set of specific use-cases. The problems, however, start when a developer wants to do something that the abstraction did not anticipate.

>When the abstraction proves to be insufficient or overbearing, it is often necessary to _pierce_ the abstraction and work under the hood. In some cases that means just not using the abstraction. However, as frameworks often put themselves at the core of any architecture, it can be hard to opt out. After all, the developer’s code is written for the framework and can’t run without it. To address this, frameworks sometimes provide intentional holes in their abstraction, little “escape hatches”, that allow the developer to access the underlying platform primitive. For example, React has the [`ref` property](https://reactjs.org/docs/refs-and-the-dom.html) to get ahold of a component’s corresponding DOM element, exposing the underlying platform primitive

>Escape hatches are, in my opinion, an absolute necessity in any library or framework. It is near impossible to anticipate every possible use case, and providing escape hatches allows developers to work around a restriction and keep moving rather than getting stuck.

>The downside of escape hatches, especially in frameworks, is that developers often drop _all_ the way down to the platform. This can pose a challenge for the developer, as they now have to re-do the work the framework did for them previously: Working their way up from a potentially low-level platform primitive to the abstraction level of the framework. The bigger the gap between framework and platform, the more work that entails for the developer.

>In the end, providing escape hatches is both necessary to not restrict developers, but is also not ideal as they can be quite costly for developers to use.

>If developers already have a skill but are forced to spend time learning a new way _to do the same thing_, frustration happens. Doubly so if there is no tangible benefit of doing it “the new way”, apart from maybe idiomaticism or purity.

>In my opinion, it is especially important to reuse \[web platform\] patterns in tutorials or “Getting Started” guides. These resources are used by newcomers, and nothing is more discouraging than to be greeted with a wall of new concepts and idioms that have to be understood and internalized just to take the first steps

>I’d summarize all of this as follows: **Frustration happens when the developer is _unable_ to use their existing skills or feels _disproportionally punished_ for doing it their way instead of your way.**

>To phrase it another way: Abstractions that take work off of developers are valuable! Of course, they are. The problems only occur when a developer feels chained to the abstractions in a situation where they’d rather do something differently. The important part is to not _force_ patterns onto them.

>If the abstraction leans into platform patterns, or even exposes the underlying platform primitives, resources like StackOverflow can be used by a developer to get unstuck. If the abstraction is watertight or introduces new patterns, a new corpus of blog posts and other indexable media needs to land on the web so developers can get help

>There is a way to support developers that have to resort to escape hatches, which will also improve the architecture of the abstraction overall: Build multiple abstractions that are built on top of one another. Like a ladder, or maybe like a parking lot. Each layer adds utility and convenience. Inevitably, by the nature of tradeoffs, it also adds opinions and constraints. Depending on what the developer knows and requires in any given situation, they can choose which layer provides the appropriate level of convenience and abstraction. They can drop down a layer (or two, or three...) on a case-by-case basis.
>The lower layers should not aim to abstract away the platform. Instead they should embrace the primitives provided by the platform and follow the patterns & idioms established by the platform, as developers already learned them.
>An example of this would be for a Design System. Instead of building just a React layer, have three layers for those that don't use React. Pure CSS, Web Components, and then React as a thin wrapper on top.

>At the core of the mental model is to think about what the target developer audience is for any given abstraction, and what skills these developers are likely to bring to the table. The abstraction should rely on these skills to minimize cognitive friction by reusing concepts, and stagger the introductions of new concepts in the onboarding flow (i.e. tutorials, “Getting Started” docs, ...). Every abstraction should ideally be optional (opt-in or opt-out) and come with escape hatches. If possible, it should also expose the abstractions below the top layer, so developers are in control and can help themselves.

#breakdown - separate doc on escape hatches?

https://surma.dev/things/cost-of-convenience/

[[20220627121829-web-platform-adoption]]

---

Libraries vs frameworks

>The distinction between “library” and “framework” has always been a matter of debate. I will not pretend that I can settle that debate, but for the context of this blog post, I’ll use Martin Fowler’s mental model.

>Libraries and a frameworks can be distinguished by looking at the _Inversion of Control_. When I use a library, I slot the library into my code and call into the library in the appropriate places. A framework, on the other hand, makes itself the center of the universe and offers slots _for me to slot into_. It’s the Hollywood principle: You don’t call the framework, the framework calls you.

>This inversion of control is not inherently bad. After all, the framework was designed to be in this place and probably provides some pretty sophisticated machinery to make code easier to write, run more efficiently or utilizes other peripheral better.

#todo - hollywood principle
https://principles.dev/p/hollywood-principle/

---

Pit of success

https://blog.codinghorror.com/falling-into-the-pit-of-success/

---

String literal union vs enums

[[ts]]

---

type 'string' is not assignable to type (where type is a string literal union)

What's the fix?

If const, link to const zettel

[[ts]]

---

Design systems enable change

https://superfriendly.com/design-systems/articles/design-systems-prepare-you-for-change/

---

Easier to revise and iterate than change

Okay to get a first pass for a DS component out

Drives adoption, lets you understand use cases

Can get more use cases and harvest later [[20220704124529-design-system-harvesting]]

```
Sometimes we just need to agree on something to move things forward by making a provisional decision, as trying to solve all things up front might feel like trying to boil the ocean. Conversation can be facilitated in the direction (e.g. designing a card):

    There is no alignment on X, so let’s not have opinions or try to solve X now,
    We need to agree on X, even if we don’t have a best answer (and be open about it).

-   Prepending “provisional” to the decision disarms and empowers the team and helps us agree on enough so that we can move forward (with the data we have) and revisit in a couple of weeks after we get new information.

-   A leak in quality is multiplied in a design system.

-   Teams react better when there is a clear expectation. Be explicit about the decision (“this is our best guess”), sometimes we need to put things live and we don’t know the answers.
```

[[designsystem]]

---

SOLID
Look for zettels already referencing these

[[principles]]

---

Searching git with `git log -S<search>`

Find a reference to a string, even if it was previously deleted.

`-p` shows the diff too
`-i` make its case insensitive

Called the 'pickaxe' option

https://git-scm.com/docs/git-log#Documentation/git-log.txt---pickaxe-all

Using `-G` over `-S` will show the result, even if the number of occurrences of the search term exists is unchanged from the commit. This is helpful to show when a line is moved, for example. `-G` also accepts a regex.


Is there a better command for this?

[[git]]

---

Scratchy thoughts:
#thoughts
Are Jest manual mocks bad? https://jestjs.io/docs/manual-mocks

Allow you to globally mock things. It works with a file located at the import path within a `__mocks__` folder.
Node modules are mocked automatically, otherwise a `jest.mock(./moduleName)` should be required.
However working with aliases, this gets a little confusing.

Good points: Keeps things DRY
Bad points: 'Magic' happens away from the code, hard to know if something relies on a dependency, hard to find as you're looking for a filepath not code

If something needs a mock, shouldn't it mock it itself?
Having it in a global `test-setup.ts` file or similar doesn't really solve this problem either

Is the problem explicitness? Can keep the code DRY somewhere, but then if it's explicitly imported, it's fine. Explicit dependencies are good. Magic ones are not.

Feels similar to SASS having a disconnect between class names and where those classes are added to the page/source. Imports help track things and keep it maintainable
#todo - separate doc on that? CSS modules kind of solves this problem, regardless of its goals on scope.

#todo - what kind of doc is this overall?

is this a [[smells]]? This surely maps to something someone's written about

Is is this?
https://principles.dev/p/explicit-dependencies-principle/

---


