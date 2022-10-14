Test in production
https://increment.com/testing/i-test-in-production/
Canaries, feature flags, multi-tenancy(?)

---

something on React contexts on how to best make them
- they re-render on object.is evaluation
- therefore put state somewhere that checks it better so it doesn't get re-created on each one
- reducer better as it's safe/doesn't cause rerenders? (link to relevant zettel)

See what Epic React has here

https://kentcdodds.com/blog/how-to-use-react-context-effectively
https://beta.reactjs.org/apis/usecontext



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


Placeholder: [[20220912120502-react-ssr]]

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
[[ssr]]
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
Is this why people prefer HSL?

How does Google's HCT work with this? https://material.io/blog/science-of-color-design

---

JS prototypes/prototype inheritance

Also JS classes and how they differ

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

---

Service workers, SPAs, MPAs, PWAs, and more

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

What is serverless?

>Serverless computing (or serverless for short), is an execution model where the cloud provider (AWS, Azure, or Google Cloud) is responsible for executing a piece of code by dynamically allocating the resources. And only charging for the amount of resources used to run the code. The code is typically run inside stateless containers that can be triggered by a variety of events including http requests, database events, queuing services, monitoring alerts, file uploads, scheduled events (cron jobs), etc. The code that is sent to the cloud provider for execution is usually in the form of a function.

>The biggest change that we are faced with while transitioning to a serverless world is that our application needs to be architectured in the form of functions. You might be used to deploying your application as a single Rails or Express monolith app. But in the serverless world you are typically required to adopt a more microservice based architecture

>Your functions are typically run inside secure (almost) stateless containers. This means that you won’t be able to run code in your application server that executes long after an event has completed or uses a prior execution context to serve a request. You have to effectively assume that your function is invoked in a new container every single time.

[[architecture]]
[[deployment]]
[[microservices]]

---

Why serverless?

>It is important to address why it is worth learning how to create serverless apps. There are a few reasons why serverless apps are favored over traditional server hosted apps:

```
1.  Low maintenance
2.  Low cost
3.  Easy to scale
```


> The biggest benefit by far is that you only need to worry about your code and nothing else. The low maintenance is a result of not having any servers to manage. You don’t need to actively ensure that your server is running properly, or that you have the right security updates on it. You deal with your own application code and nothing else.

> The main reason it’s cheaper to run serverless applications is that you are effectively only paying per request. So when your application is not being used, you are not being charged for it.

---

Fargate, Lambda, etc. any other 'serverless' things

---

Handling breaking changes in Microservices
Also relates to Module federation?

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

---

How to start a design system
https://medium.com/@NateBaldwin/dummys-guide-to-building-a-design-system-ada311c80d0b
#todo - get more links and make a synthesised document. Nathan Curtis probably has something here too

---

[[nx]] learnings
- more apps and libs are good
- nx mental model, 80/20 approach, moving things is okay, etc
	- general structure
- nx affected is strong
- different types of libs
	- nesting feature libs in domain libs
- tagging
- why a monorepo (also [[architecture]])
- microfrontends are individual apps?