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

flycheck-verify-mode

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

TODO - i think this is a principle?

[[concepts]]
[[principles]]

---

Void vs undefined in Typescript

https://stackoverflow.com/questions/58885485/why-does-typescript-have-both-void-and-undefined

---

typeof undefined vs typeof 'undefined'

https://stackoverflow.com/questions/4725603/variable-undefined-vs-typeof-variable-undefined

---

Innersource

Like open source, for proprietary software

https://resources.github.com/innersource/fundamentals/

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

Type-Only Imports and Export

[[ts]]

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

semantic tokens make sense as you add more dependencies

e.g. card padding token helps, as you need to position the close button based on that padding through CSS. Or add and remove the padding for various DOM reasons

---

pragmatic programmer notes
make new literature doc
tracer bullet vs prototypes

---

React SSR

---

Notes from Every Layout

---

Explainer on how colours are not perceived by humans 1:1
Different hues have different perception of brightness

Where did I read this? - Refactoring UI maybe?
Is this why people prefer HSL?

How does Google's HCT work with this? https://material.io/blog/science-of-color-design


---

[[20220509122858-known-unknowns]]

---

Cookies

---

Cookies vs localstorage vs sessionstorage, etc

---

Planning poker

---

https://wpt.fyi

---

https://www.bain.com/insights/rapid-tool-to-clarify-decision-accountability/

---

useEffect

TODO - general primer on useEffect?
TODO - break down this deps + cleanup reminder into a separate doc

"React performs the cleanup when the component unmounts. However, as we learned earlier, effects run for every render and not just once. This is why React _also_ cleans up effects from the previous render before running the effects next time"

Thus, when using a useEffect with a dependency array:
The cleanup function is called **whenever the dependencies change**, and when the component is unmounted.

```
useEffect(() => {
  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  return () => {
    ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  };
}, [props.friend.id]); // Only re-subscribe if props.friend.id changes
```

[[react]]

---

setState

https://reactjs.org/docs/hooks-reference.html#functional-updates

>If the new state is computed using the previous state, you can pass a function to `setState`. The function will receive the previous value, and return an updated value.

```jsx
setCount(count => count + 1);
```

TODO - new doc
Remember that if your state value is an object, the setState hook doesn't merge objects. You have to do that manually

```jsx
const [state, setState] = useState({});
setState(prevState => {
  // Object.assign would also work
  return {...prevState, ...updatedValues};
});
```

[[react]]

---

Contributing to a design system

TODO

Hot take: The need/request is more important than the artefact of what people contribute to the design system.
It's important to capture the needs across teams, figure out what the solution is, and then create that, rather than focusing on a specific team's need.

For this reason, it makes sense to harvest snowflakes periodically so you can get a broader scope on the needs and identify trends. [[20211122112956-design-system-component-hierarchy]]

[[20211115112656-rule-of-three]]

[[designsystem]]

---

TODO - snowflakes deep dive
Link with doc above

Makes sense for components to exist that fulfil needs but can't initially, or won't ever be abstracted into a generic component included in a design system.

One idea is to put these components in specific places so they can be periodically audited. That way if trends emerge, these can be harvested and genericised.

Ideally over time the amount of 'one offs' or 'snowflakes' lowers, as the design system offers more solutions for these.

https://bradfrost.com/blog/post/where-to-put-one-off-components/

[[designsystem]]

---

Reflection

[[concepts]]

---

Design system happiness

https://zeroheight.com/blog/what-makes-a-happy-design-system-team/

---

NPM overrides

https://docs.npmjs.com/cli/v8/configuring-npm/package-json#overrides

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

ripgrep multiple words

rg foo | rg bar

`-p` seems to break headings

passing `--color always --line-number` seems to produce the desired result

If using `rg -pS`, try passing `--no-heading`?

---

React reconciliation

---

Pragmatic Programmer notes [[Pragmatic Progammer]]
Especially on estimation

---

Service workers, SPAs, MPAs, PWAs, and more

---

border-radius takes 8 values
https://9elements.com/blog/css-border-radius/

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

donut scope

link to from [[20211115082404-css-not-selector]]

---

barrel files

https://github.com/basarat/typescript-book/blob/master/docs/tips/barrel.md
related to [[20210726162517-default-exports-js]]

---

xargs

how does `git ls-files --deleted | xargs git add` work?

---

adding only deleted files in git

`git ls-files -d | xargs git add`

Can pick a path with `git ls-files -d -- lib/foo | xargs git add`

For modified files use `-m` instead of `-d`

---

pragmatic vs dogmatic vs ??

---

users are good at finding problems but bad at offering solutions

>If I’d asked customers what they wanted, they would have said “a faster horse”.
>- Henry Ford

---

