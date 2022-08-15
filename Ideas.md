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

---

saas, paas, iaas
[[business]]

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

concurrent react

https://reactjs.org/blog/2022/03/29/react-v18.html

[[react]]

---

react 18 transitions
urgent vs non-urgent updates
`useTransition`?
how does `useDeferredValue` work with this

https://reactjs.org/blog/2022/03/29/react-v18.html

---

CSS Grid(?) &
CSS Subgrid

https://ishadeed.com/article/learn-css-subgrid/

---

min-content, max-content, fit-content, etc
e.g. width: fit-content

---

React SSR

How does is interact with 'server components'?

---

Explainer on how colours are not perceived by humans 1:1
Different hues have different perception of brightness
	Is this 'luminance'?
	Not lightness.

Where did I read this? - Refactoring UI maybe?
Is this why people prefer HSL?

How does Google's HCT work with this? https://material.io/blog/science-of-color-design

---

Reflection

[[concepts]]

---

Mitch general advice:

-   Don’t always say ‘no’. Rephrase it as ‘what can we do better?’ Think about next steps, re-frame it as an additional/different thing to do to achieve similar goals.
-   Positive spins! Don’t just shut ideas down
- Think of it as problem solving

---

JS prototypes/prototype inheritance

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

pragmatic vs dogmatic vs ??

---

users are good at finding problems but bad at offering solutions

>If I’d asked customers what they wanted, they would have said “a faster horse”.
>- Henry Ford

Don't just take a users solution at face value. Instead figure out the root problem is and figure out a solution for that. The user often doesn't have the context or scope that the creator does.

Don't just ask customers what they want.

Is this a [[research]] topic?

---

CDK, CloudFormation, Fargate, Lambda, etc.

Maybe first start on just CloudFormation vs CDK?

Link Cloudformation article from [[20220627112853-infrastructure-as-code]]

---

Handling breaking changes in Microservices
Also relates to Module federation?

---

String literal union vs enums

Old doc on this: https://medium.com/@katbusch/typescript-enums-explained-e5f9a101afc9

[[ts]]

---

type 'string' is not assignable to type (where type is a string literal union)

What's the fix?

If const, link to const zettel

[[ts]]

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

[[20210908155508-flexibility-components]]
[[20220621083440-design-system-flexibility]]
[[20220801011940-pit-of-success]]

---

Projects can be dropped at any time

Business goals change etc

Plan around it

---

imperative vs declarative React
React is declarative, but when does it switch to imperative?
Are all custom hooks imperative, but the call site still uses them declaratively?
React says useEffect is:
> Think of effects as an escape hatch from React’s purely functional world into the imperative world

>Conceptually, React components have always been closer to functions. Hooks embrace functions, but without sacrificing the practical spirit of React. Hooks provide access to imperative escape hatches and don’t require you to learn complex functional or reactive programming techniques.

---

Disabilities vs impairments. can be temporary, e.g. a broken arm.
Permanent vs temporary vs situational impairments

---

Margin collapse
How it works with display: table
Capsize:
>The negative margins are applied to pseudo elements to guard against [margin collapse](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing). Combining the use of pseudo elements and padding on the parent container prevents the margins from being collapsed into the parent element. The collapsing is most visible when text is used directly inside a container that has a background colour applied.
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing

---

12 factor apps

---

12 fractured apps
https://medium.com/@kelseyhightower/12-fractured-apps-1080c73d481c

Don't reach for tools like Ansible or Puppet immediately. They are often a band-aid solution that mask you not following a 12 factor app. Instead, most things can be solved by good old fashioned programming. Don't require a config file, retry the database until it's up, etc.

Don't add additional complexity when you can fix the root cause. Don't rely on a 'happy path' for your application to successfully startup.

>Remember, ship artifacts not build environments.

>Don’t get me wrong, using an entrypoint script is ok for applications you don’t have control over, but when you rely on custom entrypoint scripts for applications you write, you add another layer of complexity to the deployment process for no good reason.

>Everything in this post is about improving the deployment process for your applications, specifically those running in a Docker container, but these ideas should apply almost anywhere. On the surface it may seem like a good idea to push application bootstrapping tasks to custom wrapper scripts, but I urge you to reconsider. Deal with application bootstrapping tasks as close to the application as possible and avoid pushing this burden onto your users, which in the future could very well be you.

[[docker]]
[[infrastructure]]
[[ops]]

---

Visual regression tests for UI components

Often a better way of testing than unit testing.

Still a bit hard to test states and interactivity, due to them just being snapshots of a render. States usually require interactivity which is harder, and gets more into a [[cypress]] realm than a [[jest]] realm.

[[components]]
[[designsystem]]
[[testing]]