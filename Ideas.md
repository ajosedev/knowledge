Test in production
https://increment.com/testing/i-test-in-production/
Canaries, feature flags, multi-tenancy(?)

---

something on React contexts on how to best make them (and a brief introduction of what they are)
- they re-render on object.is evaluation
- therefore put state somewhere that checks it better so it doesn't get re-created on each one
- reducer better as it's safe/doesn't cause rerenders? (link to relevant zettel)
- any consumers re-render on context value change
- best to create contexts with the smallest amount of data possible?
- RFC to only re-render if the value used by the consumer changes?

See what Epic React has here

https://kentcdodds.com/blog/how-to-use-react-context-effectively
https://beta.reactjs.org/apis/usecontext
https://www.patterns.dev/posts/provider-pattern/

Context Module Functions (Epic React)
https://github.com/kentcdodds/advanced-react-patterns/blob/main/src/exercise/01.md
[[react]]
[[reactapi]]

---

b2b, b2c, c2c, etc
[[business]]
[[product]]

---

saas, paas, iaas
[[business]]
[[product]]

---

domain driven design
[[architecture]]
https://martinfowler.com/bliki/DomainDrivenDesign.html

---

design system contributions

Some ideas for encouraging contributions
https://medium.com/wayfair-design/contributing-to-our-design-system-at-wayfair-46fb5593e207

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

inline elements + line boxes
already existing page on this? [[20210806121648-line-boxes-css]]

https://stackoverflow.com/questions/28363186/inline-elements-and-line-height

https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#the_box_model_and_inline_boxes

---

vertical-align + inline-flex
already existing page on this? [[20210726164300-line-height-css]]?

https://stackoverflow.com/questions/48117071/element-with-display-inline-flex-has-a-strange-top-margin

---

non-replaced inline elements

---


Placeholder: [[20220912120502-server-side-rendering]]

React SSR
How does it work?
	How does it usually work?
What is hydration?

Pitfalls: e.g. don't use `window` or `document`

Why use it?

How does is interact with 'server components'? (separate doc?)

[[deployment]]
[[infrastructure]]
[[node]]
[[react]]
[[webpack]]

---

CSS Grid(?) &
CSS Subgrid

https://ishadeed.com/article/learn-css-subgrid/

---

min-content, max-content, fit-content, etc
e.g. width: fit-content

---

Explainer on how colours are not perceived by humans 1:1
Different hues have different perception of brightness
	Is this 'luminance'?
	Not lightness.

Where did I read this? - Refactoring UI maybe?
Is this why people prefer HSL? Apparently HSL is actually bad

https://stripe.com/blog/accessible-color-systems
https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl

How does Google's HCT work with this? https://material.io/blog/science-of-color-design

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

pragmatic vs dogmatic vs ??

---

users are good at finding problems but bad at offering solutions

>If I’d asked customers what they wanted, they would have said “a faster horse”.
>- Henry Ford

Don't just take a users solution at face value. Instead figure out the root problem is and figure out a solution for that. The user often doesn't have the context or scope that the creator does.

Don't just ask customers what they want.

Is this a [[research]] topic?

Alternatively 'customers don't know what they want'

[[customers]]
[[product]]

---

Fargate, Lambda, etc. any other 'serverless' things
How does Cloudflare Workers fit in?
[[serverless]]

---

Design system component philosophies

See how this lines up with existing articles. Search the [[designsystem]] tag and see what I can link out to?

https://www.gabe.pizza/notes-on-component-libraries/
```
1.  **It should be easy to take a design and translate it into UI code.** Props should map intuitively to design system documentation in Figma or otherwise. Components should look correct without applying overrides.
2.  **A component should, for the most part, act as an opaque box to a parent consuming it.** It should not leak details about its internals or allow injecting arbitrary code/styles. Data goes in; markup comes out.
3.  **The Obvious Thing, The Easy Thing, and The Right Thing should overlap most of the time.** A developer under time pressure is _usually_ going to reach for the easiest solution. Ideally, the easiest solution is the obvious one. And the obvious should be [what I wanted the developer to do in the first place](https://www.youtube.com/watch?v=SxdOUGdseq4).
4.  **Doing The Wrong Thing should be at least uncomfortable, at worst impossible.** Allow for escape hatches when necessary, but make them feel bad. The developer should think, “I should open an issue so that I don’t have to do this again.”
```

Are there more guidelines? e.g. cost of convenience/flexibility?

#todo - mine the article for more things

"Components should usually take up all horizontal space given"
"Components should probably not position themselves." [[20200402104023-components-margin]] [[20210519122422-first-class-space]]

[[20210908155508-flexibility-components]]
[[20220621083440-design-system-flexibility]]
[[20220801011940-pit-of-success]]

---

Margin collapse
How it works with display: table
Capsize:
>The negative margins are applied to pseudo elements to guard against [margin collapse](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing). Combining the use of pseudo elements and padding on the parent container prevents the margins from being collapsed into the parent element. The collapsing is most visible when text is used directly inside a container that has a background colour applied.
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing

---

'Dont break the API' and how it applies to design systems and design tokens

Go has an idea of new versions never break old code

[[20210927144324-design-tokens]] help enable change [[20211029153348-semantic-design-tokens]]
	If you don't change the API, token changes are quick and easy
	If you do, you still need to find replace
	Ergo, make sure you abstract layers to an appropriate level [[20220819043510-design-tokens-abstraction-layers]]

Is it necessary to break the API sometimes?

---

styling props
https://jxnblk.com/blog/two-steps-forward/
https://www.christopherbiscardi.com/post/styles-and-naming

https://mrmrs.cc/writing/scalable-css/
https://jxnblk.com/blog/patterns-for-style-composition-in-react/
https://johno.com/guessable/

How this is different to something like Tailwind
What advantages it has over writing plain CSS?

---

better understanding of async/await
e.g. does async block the code execution of the entire async function?

---

https://github.com/frehner/modern-guide-to-packaging-js-library

Different module types: CJS, AMD, UMD, ESM
https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm

---

How to start a design system
https://medium.com/@NateBaldwin/dummys-guide-to-building-a-design-system-ada311c80d0b
#todo - get more links and make a synthesised document. Nathan Curtis probably has something here too

---

why a monorepo (also [[architecture]])
atomic changes

--- 

How does Remix utilise [[20221107042513-edge-computing]]

What about next?

[[architecture]]
[[deployment]]
[[networking]]
[[rendering]]

---

bundlers, compilers, loaders, etc.
Vite, esbuild, webpack, typescript, rollup, parcel, Turbopack, babel, swc

[[buildtooling]]

---

separating typescript from babel
https://iamturns.com/typescript-babel/

[[buildtooling]]

---

Don't test implementation details
e.g. with testing-library, don't test internal props/state
Test what the user can see
The idea behind the 'test user'
>The more your tests resemble the way your software is used, the more confidence they can give you.

Testing pyramid - write more integration than unit
Test based on what you want to know breaks?

TDD (separate doc)

My comment on a PR:
```
I agree. It's been a hot minute since I've written E2E tests from scratch, but I'll just dump some E2E best practice thoughts for discussion. I also don't want to de-rail this PR so consider this all entirely non-blocking 🙏 

My fear with using DOM selectors, e.g. `cy.get([data-testid=*]).find('h1')` is that it's brittle to any page updates. For example, if there's a fourth list item added, or a heading level is changed, or an image is removed, the integration tests will break. That could be a desired result, I'm not sure. On the flipside, the other strategy would be to just test that the key data is there. Check the price is there, check the button works, check the radio items are clickable and they all have a relevant heading. The tradeoff is it's less all-encompassing.

I know it's not the gold standard Cypress recommends in it's [best practices](https://docs.cypress.io/guides/references/best-practices#Selecting-Elements), but I'm a fan of the `testing-library` methodology of testing what the user sees. Which means it's less `data` attributes, and more `findByRole`s.

This currently seems to be relying on the DOM structure a lot, which could easily change as components get updated. Rather than relying on copy or `cy.get([data-testid=*]).find(*)` the middle ground is adding a testid to the most relevant elements. e.g. the price, button, radio items, etc. as mentioned earlier. Things that the user must see for the flow to work.

As an anecdotal data point, as someone that doesn't know what this page is rendering, I don't really know what these tests are testing either.
```

https://kentcdodds.com/blog/write-tests
https://twitter.com/kentcdodds/status/977018512689455106?lang=en
https://kentcdodds.com/blog/testing-implementation-details
https://twitter.com/dan_abramov/status/1065663012541992963
https://www.tedinski.com/2018/11/27/contradictory-tdd.html

[[testing]]

---

To read:
https://www.tedinski.com/2018/02/06/system-boundaries.html
https://www.tedinski.com/2019/04/02/solid-critique.html


---

Server Driven UI (SDUI)
Airbnb's 'Ghost Platform'

Essentially this is a Headless CMS? [[20221107050300-headless-cms]]
What makes it different?
	That it's focused on creating all types of User Interfaces, rather than just similar content, e.g. blog posts?
	Is it just the next evolution of it? Pushes it harder?
	e.g. it really pushes the idea of structured content that can be laid out as you want. Effectively a CMS for your entire web app?
	Lets you control the layout as well as the content
	The API provides both the data AND the layout. You're not just requesting FAQ data, you're also being told there's an FAQ section?
Also supports actions which is cool
Fuflils a cool niche of being able to keep UI consistent across all outputs, including mobile apps without needing to ship an app update

Seems very similar to what I did with 'Advanced Custom Fields' in Wordpress.
Or the `slices` side project https://github.com/ajosedev/slices. Converting JSON layouts into the full page, rather than having more rigid templates.

Lets you shift around the order a lot more and build more dynamic pages.

Platform independent

https://medium.com/airbnb-engineering/a-deep-dive-into-airbnbs-server-driven-ui-system-842244c5f5
https://prismic.io/

---

Prioritising based on workarounds and escape hatches
If you have a workaround, you an lower the priority of things
When it comes to a design system, it makes sense to build that really lower base
	Easy enough to build a simple tag or card if you don't have one
	Much harder to build a popover

Is this effectively cost of delay in disguise? (new doc)

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

font inspector
https://opentype.js.org/font-inspector.html

---

Loading fonts in a browser
https://fonts.google.com/knowledge/using_type/using_web_fonts

If you don't load a particular font, the browser can still create a fake version of it
Ideally the typeface itself is loaded
https://www.smashingmagazine.com/2012/07/avoiding-faux-weights-styles-google-web-fonts/

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

Composition over inheritence
Perhaps two separate docs on composition, and inheritence?

---

Separation of concerns

---

Indirection

---

Descendant vs child selectors. Basically:
Child = immediate descendent
Descendant = child at any level

Think of better definitions