Test in production
https://increment.com/testing/i-test-in-production/
Canaries, feature flags, multi-tenancy(?)

---

something on React contexts on how to best make them (and a brief introduction of what they are)
- they re-render on object.is evaluation
- therefore put state somewhere that checks it better so it doesn't get re-created on each one
- reducer better as it's safe/doesn't cause rerenders? (link to relevant zettel)

- any consumers re-render on context value change
	-  is this true regardless of having a provider component that houses the state?
- best to create contexts with the smallest amount of data possible?
- RFC to only re-render if the value used by the consumer changes?

- how does creating a provider component help?

See what Epic React has here

https://kentcdodds.com/blog/how-to-use-react-context-effectively
https://beta.reactjs.org/apis/usecontext
https://www.patterns.dev/posts/provider-pattern/

Context Module Functions (Epic React)
https://github.com/kentcdodds/advanced-react-patterns/blob/main/src/exercise/01.md
[[react]]
[[reactapi]]

---

pre-mortem and post-mortem

[[engineering]]
[[product]]

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

#todo - watch Jen Simmons' videos on these https://labs.jensimmons.com/
#todo - https://www.youtube.com/watch?v=5uhIiI9Ld5M

[[20211115081243-container-queries]]

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

intrinsic css functions

https://moderncss.dev/contextual-spacing-for-intrinsic-web-design/

---

Declarative vs Imperative design systems

Following on from the ideas of 'declarative design' or the methodology used by intrinsic/extrinsic design (TODO - links), is the idea of 'declarative design systems'.

>Personally, I think the word “system” is the important part of a design system. But all too often design systems are really _collections_ rather than systems: a collection of pre-generated components rather than a _system_ for generating components.

>The declarative approach is less controlling: “here are pre-defined rules and guidelines to help you make components.” But this lack of precision comes at a cost. The people using the design system need to have the mindset—and the ability—to create the components they need from the systematic rules they’ve been provided.

>If these buttons were in an imperative design system, then the output would be the important part. The design system would supply the code needed to make those buttons exactly. If you need a different button, it would have to be added to the design system as a variation.

>But in a declarative design system, the output isn’t as important as the underlying ruleset. In this case, there are rules to create the components. Rules that create a coloured button with states when a single colour is given. Think of programmatic lightening/darkening rather than a custom tint/shade for your colour palette.

>If you’re approaching a design system with an imperative mindset then “correct” means “exact.” With this approach, precision is seen as valuable: precise spacing, precise numbers, precise pixels.

>But if you’re approaching a design system with a declarative mindset, then “correct” means “resilient.” With this approach, flexibility is seen as valuable: flexible spacing, flexible ranges, flexible outputs.

>The systematic approach is at the heart of declarative design; setting up the rules and ratios in advance but leaving the detail of the final implementation to the browser at runtime.

>These are two fundamentally different design approaches and yet the results of both would be described as a design system.

https://adactio.com/journal/19131

---

non-replaced inline elements

---

Explainer on how colours are not perceived by humans 1:1
Different hues have different perception of brightness
	Is this 'luminance'?
	Not lightness.

Where did I read this? - Refactoring UI maybe?
Is this why people prefer HSL? Apparently HSL is actually bad

https://stripe.com/blog/accessible-color-systems

#breakdown - oklch
https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl
what is p3 vs srgb
how can you convert between HEX and OKLCH - is it because they are in the same colour space?
HEX can't use P3?

How does Google's HCT work with this? https://material.io/blog/science-of-color-design

[[20230508124011-oklch]]

---

JS prototypes/prototype inheritance

Prototype chain
Also JS classes and how they differ

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

---

Service workers, PWAs, and more

[[architecture]]
[[browsers]]
[[infrastructure]]
[[web]]

---

Fargate, Lambda, etc. any other 'serverless' things
How does Cloudflare Workers fit in?
[[serverless]]

---

'Dont break the API' and how it applies to design systems and design tokens

Go has an idea of new versions never break old code

[[20210927144324-design-tokens]] help enable change [[20211029153348-semantic-design-tokens]]
	If you don't change the API, token changes are quick and easy
	If you do, you still need to find replace
	Ergo, make sure you abstract layers to an appropriate level [[20211029153348-semantic-design-tokens]]

Is it necessary to break the API sometimes?

Link to from [[20221219040857-why-monorepo]]

---

better understanding of async/await
e.g. does async block the code execution of the entire async function?

[[20230829020537-await-foreach]]

---

https://github.com/frehner/modern-guide-to-packaging-js-library
e.g. what does 'exports' do in a library's package.json?

and:

How does JS execution work when importing modules
Is it different depending on the module import type? e.g. ESM vs CJS
If I have a function or variable declaration in a separate module, does that get execute on import before the next import?
	I think it's executed in place
Are they only executed once?
Are they executed synchronously?
	Apparently different for ES2020 and async modules?
Does ESM always result in a singleton?
Does modules do anythign weird in same cases, e.g. React context?
What about if an exported object references another export, does it go down the tree?
	What if that second level of object is generated, when does that code get executed? e.g. file1 imports file2 object, file2 object spreads the object from file3. file3's object is optionally generated through something, e.g. `export const Object.keys(...`

https://javascript.info/modules-intro
https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/
https://exploringjs.com/es6/ch_modules.html#sec_modules-in-browsers
https://blog.isquaredsoftware.com/2023/08/esm-modernization-lessons/
https://blog.logrocket.com/transpile-es-modules-with-webpack-node-js/
https://bun.sh/blog/commonjs-is-not-going-away

and:

How to fix React context when importing from NPM modules?

Possible ideas:
1. re-export from a single file
2. single entry point, rather than [[20220911060950-code-splitting]]
3. using `externals`
4. imports in `esm` vs `cjs`

[[buildtooling]]
[[npm]]
[[webpack]]

and:

Different module types: CJS, AMD, UMD, ESM
https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm
Does ECMAScript fit in here?

How does this tie into unpkg using UMD? [[20230116113451-unpkg]]

What does Deno do?
What does SWC or SWC-Node do?

What about Pure ESM packages? https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
How to fix ESM related errors
How does Typescript factor into all of this? e.g. can't use mjs. TS uses ESM syntax, but converts to CJS?
esModuleInterop
How this interacts with package.json settings, such as `main`, `module`, and `exports`
`type: module` and what it does

https://github.com/johnloy/esm-commonjs-interop-manual
https://redfin.engineering/node-modules-at-war-why-commonjs-and-es-modules-cant-get-along-9617135eeca1
https://adamcoster.com/blog/commonjs-and-esm-importexport-compatibility-examples

[[buildtooling]]
[[js]]

Publint https://publint.dev/

What are `externals` generally speaking?
> The `externals` configuration option provides a way of excluding dependencies from the output bundles. Instead, the created bundle relies on that dependency to be present in the consumer's (any end-user application) environment. This feature is typically most useful to **library developers**, however there are a variety of applications for it.

Usually peer deps are marked as external?

---

scopes in javascript

---

node_modules in production

related to [[20230411040305-node-dependencies]]?

---

How does Remix utilise [[20221107042513-edge-computing]]

What about next?

[[architecture]]
[[deployment]]
[[networking]]
[[rendering]]

---

bundlers, compilers, loaders, transpilers, etc.
Vite, esbuild, webpack, typescript, rollup, parcel, Turbopack, babel, swc, bun, deno
Concept pages for what each thing is, e.g. what is a transpiler? How is it different from a compiler? Which of these tools is a transpiler?

[[buildtooling]]

---

separating typescript from babel
https://iamturns.com/typescript-babel/

[[buildtooling]]

---

To read:
https://www.tedinski.com/2018/02/06/system-boundaries.html
https://www.tedinski.com/2019/04/02/solid-critique.html

---

Prefer server side redirects
https://gist.github.com/mjackson/b5748add2795ce7448a366ae8f8ae3bb
https://kentcdodds.com/blog/stop-using-client-side-route-redirects
and Google

---

Remix primer

https://remix.run/docs/en/v1/pages/philosophy?

---

Data flow in Remix
https://remix.run/blog/remix-data-flow

and Data fetching in Remix
https://remix.run/docs/en/v1/guides/data-loading

Link to [[20220328094742-render-as-you-fetch]] and [[20221123025646-react-data-fetching]]

---

Vite primer
https://vitejs.dev/guide/

---

[[20221110041808-react-server-components]]
https://remix.run/blog/react-server-components

--- 

Jamstack
https://jamstack.wtf/
- What is it?
- What does it do?
- Pros/cons?
- What tools fit in?
- What's the line between dynamic and static? How do lambdas etc fit in
	- https://www.smashingmagazine.com/2019/12/dynamic-async-functionality-jamsstack-websites/
	- #todo - add this to [[20221128053251-static-rendering-dynamic]]

[[20221128051011-static-rendering]]
[[20221128053251-static-rendering-dynamic]]

[[architecture]]
[[deployment]]
[[infrastructure]]

---

What is qwik?

How does it relate to transitional apps

---

What is svelte?
Mention sveltekit

https://dev.to/swyx/svelte-for-sites-react-for-apps-2o8h

---

Composition over inheritance - why?
Perhaps two separate docs on composition, and inheritance? And then a final linking doc

From pragprog:
```
Inheritance tax

Don't use inheritance.
Inheritance is coupling. The child class is coupled to the parent, its parent, and so on.
Code that uses the child is also coupled to this parent tree too.

There are better alternatives: interfaces and protocols, delegation, mixins and traits

[[20210202103254-coupling-cohesion]]
```

Link to from [[Andy Hunt & Dave Thomas - Pragmatic Progammer]]
Link to from [[20230126095251-utility-first-css]]

---

css grid primer
esp difference between -items and -content
>The justify-content and align-content properties align the grid.
>The justify-self, justify-items, align-self and align-items properties align the grid items.

Note: https://www.rawkblog.com/2018/03/css-grid-understanding-grid-gap-and-fr-vs-auto-units/

subgrid: https://ishadeed.com/article/learn-css-subgrid/
[[cssgrid]]

---

flexbox primer
[[flexbox]]

---

Avoiding mutation in JS
What mutation is, why you should avoid it, and how to do it
Passing by reference vs value (new doc?)
Namely the difference between examples like these:
```js
const newArray = array;
// vs
const newArray = [...array];
```

How does this work with objects vs arrays?
How does this work in functions when passing objects/arrays?
	Maybe a separate doc on pass by sharing (or whatever it's called) in JS
	And in general pass by value vs reference
Primitive values vs non-primtive values https://daveceddia.com/javascript-references/
Pure vs impure

structuredClone https://www.builder.io/blog/structured-clone

---

http://blogs.newardassociates.com/blog/2023/you-want-modules-not-microservices.html

---

#todo
How do browsers handle fractional pixels? Rounding? Something different?
Different for Retina? In general how does pixel density (PPI?) work here?
Physical pixels vs virtual pixels
https://www.reddit.com/r/webdev/comments/v7xrad/how_do_fractional_pixel_measurements_work/
How it corresponds to resolution. I think 'native' resolution plays a factor here - as soon as you are not using the maximum resolution of a device, you start to change the relationship between physical and virtual pixels? Can emulate Retina that way?
PPI of phones is a lot better than PPI of monitors?
[[20201223162830-subpixel-rendering]] - this might be renaming

How does this then work with breakpoints and media queries?
What is a CSS pixel? How does it relate to device pixels? Is there a standard?
https://www.quirksmode.org/blog/archives/2010/04/a_pixel_is_not.html
https://elad.medium.com/understanding-the-difference-between-css-resolution-and-device-resolution-28acae23da0b
How does this relate to 'viewport'? [[20210825141346-width-devices-viewport]] - this might need updating
https://web.dev/articles/codelab-density-descriptors
https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag
```ini
CSSPixelWidth = DevicePixelWidth / DevicePixelRatio??
```

How does this relate to pixels, rem, em and other a11y needs? e.g. [[20220523113342-font-scaling-a11y]]

https://every-layout.dev/rudiments/units/

---

To read: https://jxnblk.com/blog/design-graph/

---

TS: modules vs namespaces

Pretty sure modules is the accepted way to go now

Is this the same question as explicitly importing types vs adding them globally using type declaration files?

How does this tie into [[20221216123530-ts-declaration-files]]

--

Related to modules vs namespaces:

How does [[nx]] deal with declaration files across different libraries
Works within a single folder, but doesn't work across folders:

https://stackoverflow.com/questions/69976396/nrwl-nx-library-typescript-ambient-declaration-files

I think this is because it doesn't automatically add the typings from other apps/libs. You can explicitly add it with `files`, `types`, etc.

--

TS: modules vs scripts
https://stackoverflow.com/questions/42233987/how-to-configure-custom-global-interfaces-d-ts-files-for-typescript
>In TypeScript, just as in ECMAScript 2015, any file containing a top-level `import` or `export` is considered a module. Conversely, a file without any top-level `import` or `export` declarations is treated as a script whose contents are available in the global scope (and therefore to modules as well).

--

Related: should you use globally available typings in your own code? Or is it preferred to import and export things explicitly
https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html
>Just like all global namespace pollution, it can be hard to identify component dependencies, especially in a large application.
Add to [[20221216123530-ts-declaration-files]]

Kind of similar to: [[20220801022400-explicit-dependencies-principle]]

---

Big O Notation

---

To read: https://gustafnk.github.io/microservice-websites/

---

OWASP 10

---

How do NPM package locks work?
When will it actually update the version in the package-lock
	I think it's only if the package-lock version doesn't satisfy the new package.json version
npm ci vs npm i
npm shrinkwrap?
	I think this was the old tech: https://www.reddit.com/r/javascript/comments/6dgnnq/npm_v500_released_save_by_default_lockfile_better/di3mjuk/

---

Thinking in GraphQL
Vaguely, GraphQL vs REST
https://relay.dev/docs/principles-and-architecture/thinking-in-graphql/

	Note that GraphQL doesn't solve the waterfall problem unless used correctly.

---

Eslint warnings vs errors
In general, warnings are a cop-out?
If something doesn't break the build, it won't get fixed

So as a general rule, if you care about something, make it break the build

There's small amounts of nuance here - some things are an anti-pattern to break the build, e.g. deprecations.
	Since they are tied to a migration strategy across multiple builds, you need the build to work still

[[engineering]]
[[eslint]]

#thoughts 

---

Deprecation

How to best manage it
Do you have to eventually delete the thing? Does deprecation = eventual removal?
	When can you know it's safe to do so? Different circumstances depending on how your code is used
	Deprecation vs removal 
What's the benefit to removing deprecated things? What's the benefit of keeping it around?
	What if it gets in the way of other improvements?

Why don't browsers ever delete something that's deprecated?
	Because they can't ever know if it's still in use
	IF you do know if something's in use, THEN you can probably remove it
		Usually not an ability you have

"Don't break the API"

If you do remove it, it's a breaking change (even if already deprecated) [[20220509012212-semantic-versioning]]

https://softwareengineering.stackexchange.com/questions/381763/how-long-to-wait-before-deleting-a-deprecated-method

[[concepts]]

---

Dependency hell and the diamond dependency problem

https://en.wikipedia.org/wiki/Dependency_hell

---

Font smoothing

Not just a positive thing. It being framed as a 'fix' might be disingenuine.

Default is to use sub pixels, which can sometimes make a font look 'bolder'
Font smoothing is essentially aliasing
The 'smooth' settings force it to use whole pixels only in a subtractive manner, which make a font look 'thinner'

A11y concerns - mostly around being thinner and having contrast issues

https://szafranek.net/blog/2009/02/22/font-smoothing-explained/
https://usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/

Does it make sense to do this with a media query based on `dpi`/`resolution`?
https://github.com/sindresorhus/modern-normalize/issues/19

Some interesting stuff on monitors:
https://tonsky.me/blog/monitors/

---

Working agreements, and how they help teams
also known as 'team agreements'

Help people make decisions on a shared ruleset/guidelines.

Work as good reminders - should be involved in rituals in some way

https://www.atlassian.com/blog/teamwork/team-agreements-examples-and-purpose

[[career]]
[[engineering]]
[[product]]

---

DevEx/DX/Developer Experience

#todo - https://queue.acm.org/detail.cfm?id=3595878
More than just tools
Flow State, Feedback Loops, Cognitive Load

---

https://lawsofux.com/

---

Synthetic vs real user monitoring
https://developer.mozilla.org/en-US/docs/Web/Performance/Rum-vs-Synthetic

[[monitoring]]
[[performance]]

---

Browser render cycle
layout, paint, composite
Layout thrashing, etc

---

Assumptions in async remote work

They are way more dangerous

Making assumptions can often lead to misunderstandings, mistakes, problems, etc.
Can say something and wake up the next day and it's gone in a completely different direction
Because you're async, you can't course correct.
The cause can be many reasons, but assumptions are a big one.

Clarity is the goal
Be explicit about what you're saying
Be as clear as possible
Note any assumptions you've missed
Better to over-communicate than under-communicate

Feedback loops are longer, so you need to be clearer

[[communication]]
[[writing]]

---

Signals, and how they're used in UI frameworks.  
How does this compare to React? I think it's mostly around listening vs aggressively re rendering the entire tree?  
What about explicit depencnies?  
Are these the same as observables?  
https://svelte.dev/blog/runes

---

Proper breakdown on inline-block vs block vs inline
	I know inline-block has a lot of gotchas, e.g. vertical margin/padding doesn't work but horizontal does
How does inline-flex work in here too?

Also intersects with [[20221219123110-intrinsic-sizes]] and maybe even [[intrinsiclayout]]. Especially around block not needing to be 100% width

https://stackoverflow.com/questions/9189810/css-display-inline-vs-inline-block
https://css-tricks.com/when-do-you-use-inline-block/

---

Diamond dependency problem

---

