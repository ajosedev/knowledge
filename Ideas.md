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

Bash stream redirection

&> 1> 2> in bash
/dev/null
1 is stdout, 2 is stderr, & is both?
Can redirect into each other, e.g. 2>&1?
Term is 'redirect'
This also is the same as just the standard >, e.g. echo 'Hello' > test.txt
What is >>?

Redirection operators allow control of where input and output streams should go. When you see `>` it means redirection. The following are some of the redirect operators in Bash:

-   `>` - redirect output, overwriting target if exists
-   `>>` - redirect output, appending instead of overwriting if target exists
-   `&#>` - redirect file descriptor _#_, where _#_ is the identifier
-   `<` - redirect input

Common redirects:

-   `1>` - redirects stdout only. This is also the same as simply doing `>`
-   `2>` - redirects stderr only
-   `2>&1` - redirects stderr to stdout. The `2>` is redirecting the standard error output into file descriptor `1` which is standard out. The final output will contain both stdout and stderr output, if any.
-   '&>' - redirect stdout and stderr. This is also the same as the above `2>&1`

For example:

-   `command 2>&1 > out.log` - says "point output of FD #2 to FD #1, and ouput FD #1 to out file".

The reason an ampersand is required is because `command 2>1` would be ambiguous; it wouldn't be clear if it was redirecting to file descriptor `1` or to a filename named `1`, so the `&` is required to explicitly reference it as the file descriptor.

Sometimes when we aren't interested in the program stdout output, we can redirected to `/dev/null` to silence the output. This device file acts like a black hole for data streams.

---

separate doc on I/O bash streams
0 - stdin
1 - stdout
2 - stderr

-   The standard input stream accepts text as it's input.
-   The text output from the command is sent to the shell though the standard output stream.
-   Error messages from the command is sent to the shell through the standard error stream.

---

Bash stream pipelines

Using the `|` pipe operator allows you to send the output of one program as input to another program.

command 1 | command2

You can chain multiple commands creating a pipeline:

command 1 | command 2 | command3

For running a series of commands in sequential order then use the following operators:

-   `&&` - run command if the last one did not fail (zero exit status code)
-   `||` - run command if the last one failed (non-zero exit status code)
-   `;` - run command regardless of the last exit code

---

pre and post- scripts automatically work in package.json
e.g. with a command called `compress`, any command named `precompress` will execute before, and `postcompress` executes after.
The names need to match

---

npm install runs scripts defined in the package your installing (i.e. not your package.json)
This is how npm modules install binaries and other setup, e.g. Cypress

The following are run when you run `npm install`:
    preinstall
    install
    postinstall
    prepublish
    preprepare
    prepare
    postprepare

---

vertical-align + inline-flex

https://stackoverflow.com/questions/48117071/element-with-display-inline-flex-has-a-strange-top-margin

---

onAnimationEnd

---

Test in production
https://increment.com/testing/i-test-in-production/
Canaries, feature flags, multi-tenancy(?)

---

WCAG3 will use APCA (Advanced Perceptual COnttrast Algorithm) for its color contrast
- Make notes about why its currently iffy
- https://twitter.com/DanHollick/status/1468958644364402702
- Link to tools that use it
- https://github.com/Myndex/SAPC-APCA/blob/master/WhyAPCA.md

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

Dogfooding design system is so helpful for identifying gaps in usability and missing components.
Recreating the UI as an experiment in tools like playroom is super useful as a quick REPL.
e.g. sometimes you're missing a small thing like a Divider, or a Card component.
A good reason to make a DS site out of DS components

---

Primer on microfrontends

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

choose boring technology
[[20220328112803-choose-boring-technology]]

---

using never in intersection fixes polymorphic props that build off it
see: Combobox

---

bleed component
another layout component [[20200314214239-layout-components]]
Padding can be applied with a `Box` or `Inset` component or similar. Thinking of a Card component it usually includes padding
Often want to break away from that, and add something that is flush with the top or bottom of a card

Also common in blogs where images occupy full width but text content has a width set to something [[20210201144247-line-length]]

Interesting problem, how much do you want to bleed? Needs knowledge from the parent. Perhaps that's passed through a theme?

---

https://swizec.com/blog/how-to-give-and-receive-feedback/
Giving feedback
1.  Establish a good working relationship
2.  Ensure a common understanding of good intentions
3.  Focus on the work, not the person
4.  Ask clarifying questions
5.  Make suggestions as questions (Have you tried X?)
6.  Explain your reasoning

Suggestions as questions are like verbal jujitsu. I think it's stupid but it works. For 2 reasons:

a) the person can save face and take ownership b) it may have been tried and didn't work

But it also leads to planes crashing. _"Have you considered checking the altimeter reading?"_ is too gentle when you're about to crash. If you have strong opinions in a critical situation, _say it straight_. No time for egos.

---

Receiving feedback

_"Hey your sweater is nice! You have great taste"_

_"Oh this old thing? Pfft"_

You just told someone never to give you a compliment. They were looking for a feel good moment and you made it awkward.

Say Thank You then shut up. Simple. But hard.

Same with negative feedback. Say thank you, ask for examples, dig in with clarifying questions, and _do not defend yourself_. Accept.
Here's the thing about feedback. Positive feedback feels good and negative feedback helps you improve. Which do you want?

Your _average_ performance defines your long-term outcomes. [How good you are on a bad day](https://swizec.com/blog/flow-good-for-programming-not-engineering/), [how much you focus on fixing flaws](https://swizec.com/blog/how-grit-superchargers-your-career/). That's what determines success.

---

Why a design system?
1.  They help with **consistency**, so there are fewer unique solutions for similar problems.
2.  They make design and development **faster**.
3.  They **free** designers and developers to focus on bigger, more specific, and unique problems.

Last point is often the biggest one, as it compounds.
Don't have to sweat the small stuff, so they can spend more time creating value and solving difficult and sometimes more innovative problems. Allows you to stay focused and not have to context switch.

---

However you need to also break out of the design system
1.  Consistency becomes **monotony** and we lack variety and intent in our solutions.
2.  **Speed is overrated** and the momentum hinders teams from building outside the bounds of the system.
3.  Designers and developers become **imprisoned** within the system boundaries.
"If your user needs a solution that is very specific and unique, you can’t let the system hold you back.

"The system defines solutions" -> "Solutions define the system"

Break out of your design system
https://breakyourdesignsystem.com/

---

Prioritising design system work

General list of ideas:
Workshop on identified components and how important everyone thinks they are
	Have two axes, one for the estimated amount of work and another for how important the component is
	Ensure you don't make everything high priority - might be best to limit it
	Involve anyone who would contribute to the DS

[[product]]

---

The design systems flywheel

The Flywheel Effect - Small wins accumulate over time, creating momentum that keeps your business growing. #breakdown? Also known as the virtuous loop or virtuous cycle?

A method growing your design system
![[Design system flywheel.png]]

Here’s how the Design System Flywheel works:

1.  Community is critical because it leads to contribution. We can involve users in different steps in the Design System to create shared ownership. We create trust with transparent communication and consistency. Trust and shared ownership sit at the core of a community.
2.  When there is more contribution, it increases the scalability of the design system. We no longer only rely on the Design System team to create components. It also gives us more opportunities to collaborate with our users. When we collaborate, we enable the Design System to have more _meaningful_ coverage — just more coverage is not always better.
3.  More collaboration will cultivate the feeling of ownership and establish trust, which helps build the community.
4.  As the Design System grows, it will have better visibility and increase social pressure for adoption. We can celebrate the adopters’ achievements to boost social pressure. We also need to make sure that we have a good customer support system to maintain trust.
5.  As adoption goes up, it increases the opportunities for more humans to join the community.

https://medium.com/@thesandylam/grow-your-design-system-from-good-to-great-e072086ed1a7

---

design system contributions

Some ideas for encouraging contributions
https://medium.com/wayfair-design/contributing-to-our-design-system-at-wayfair-46fb5593e207

---

design system source of truth

Assuming you are making a web product, the source of truth has to be the frontend code
This is what your users are using, and is visible on the sight. Bugs in the code are real, bugs in Figma _can_ be ignored

However that doesn't mean engineers are necessarily the primary audience. It can be argued that designers should be. Change at the design stage is much much cheaper, and often designers roles line up better with design system contributions. For example, they are more aware of things they want to create but may not be supported, or UI that doesn't work well, etc. Designers are trying to create solutions which often involves innovation or stretching the bounds of a design system. Engineers are just implementing those solutions.

That all being said, the primary audience for your _documentation_ may be different.

---

Show current buffer's keybindings

Either use `describe-mode` which shows all current modes and their keybindings. This is also helpful to figure out what major mode you are in.
Doom also has `SPC h b b` (and similar `SPC h b <x>`) that displays the current keybindings

[[doomemacs]]
[[emacs]]

---

`C-x` is a prefix key that often allows for many other commands in Emacs. These commands are always active (similar to `M-x`), meaning they can be used while in an interactive buffer.

Other prefix keys include `C-c`, `C-h`, `C-x`.

Using `C-h` after invoking a prefix key displays a list of commands starting with that prefix. `F1` key can also be used. Helpful for getting a searchable list in the minibuffer

For example, to switch windows while in an interactive minibuffer you can use `C-x o`.

[[emacs]]

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

[[concepts]]

---

Void vs undefined in Typescript

https://stackoverflow.com/questions/58885485/why-does-typescript-have-both-void-and-undefined

---

# Engineer manager pendulum

Alternatively, the engineering & management cycle.

Management is a change of profession, not just a promotion. It's a parallel track to engineering, so you're effectively becoming a junior again.
You'll be bad at it when you first start, but that's okay. To get better as a manager, you need manager skills, not IC skills.

However, the best managers are ones that know how to engineer. You need to know how to get stuff done. You need to know what you're talking about to the people you manage. Over time though, those engineering skills start to deteriorate.

Consider switching back and forth between the two - get the best of both worlds. Solve people problems, and then later solve code problems. Each profession helps with the other.

A key tip for keeping sharp on engineering while managing: **don't write code *in the critical path***.

https://charity.wtf/2017/05/11/the-engineer-manager-pendulum/
https://charity.wtf/2019/01/04/engineering-management-the-pendulum-or-the-ladder/

[[career]]
[[engineering]]
[[management]]

---

# Better engineers bring business value

Some half-thoughts on senior engineers.

As your seniority grows, you go from completing tasks, to providing business value.

Instead of asking what card to pick up, you help create and refine cards. [[20211007190845-what-to-do]]
Instead of completing a task, you ask questions [[20220411123326-owning-projects-senior-engineer]]
Instead of siloed work, you force multiply to get projects done [[20220411123138-senior-engineers-get-nothing-done]]

You start to help with bigger projects, work on strategy more than code, and help others achieve broader team goals, rather than your own.

This aligns with what you should sell to new companies too. You don't just write code in a language, you provide value through code and knowledge.

You're not paid for effort - you're paid for the value you bring.

[[career]]
[[engineering]]

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

For clear writing, answer these questions

1. What Am I Really Trying To Say

2. Why Should People Care 

3. What Is The Most Important Point

4. What Is The Easiest Way To Understand The Most Important Point

5. How Do I Want The Reader To Feel

6. What Should The Reader Do Next

https://twitter.com/shreyas/status/1285460711808700418

[[writing]]

---

Design system adoption/releases

As an organization is starting a design system, objectives correspond to alpha and beta releases intended for early adopters and lead to general availability. Later, cycles deliver new feature sets of significant value (Charts! Motion! Alerts!) and/or a major upgrade predictably.

> “We have clients building against specific timelines. They can’t — and don’t want to — constantly pull down UI updates.” — Nate Baldwin, Adobe Spectrum

They’ll often _only_ engage with a system based on these longer term cycles, fitting the system’s impact on their capacity with other prioritized objectives.

_Takeaway_: System adopters are interested in both what’s coming next as well as the broader direction and bigger chunks you’ll deliver. Orient priorities and release plans to suit both the near- and long-term.

_Takeaway_: Orient release cadence and workflows based on relevant customer distinctions. For more closely aligned teams driving your priorities or more dependent on smaller, incremental change, increase how often—and how automated—you conduct the release process.

---

Semver

Semantic versioning

Major.Minor.Patch

Major - incompatible API changes (breaking changes)
Minor - Adding features that are backwards-compatible
Patch - Bug fixes that are backwards-compatible

Breaking change does not necessarily mean new feature.

---

Design system versioning

SemVer is the standard, just use that. [[TODO]]
Encourage designers to use it too.

Can version the library, e.g. one version across all components.
If one component changes or has a breaking change, you'll need to increment the entire library as appropriate.
Often this is required for using a compiled CSS stylesheet, as all the CSS is bundled into one file.

Can version by component also. Breaking changes for one component only affect that particular component.
Does not necessarily mean you can use multiple versions of the same component on one page.

_Takeaway_: A major version is neither a marketing ploy nor a guarantee that major effort awaits. Instead, it’s a signal that a stable architecture has shifted in ways large or small, and adopters should pay attention as they upgrade.

When deprecating, consider current use. Also consider codemods/etc to make the job of migration easier. Should have a process for deprecating things, and a timeline of when you're going to do it.

Design documentation should be kept in sync. Use a similar versioning system here too.

[[TODO - version docs separate from library]]
[[TODO - tokens separate from library]]

---

Version doc separate from library

Keep these separate, even if docs are closely tied to the code. e.g. a top level folder for `doc-site` and another for `library`. The doc site is a consumer of the design system.

This way you don't need to make a release for doc changes. This uncoupling allows for distinct workflows for both products. You can still keep the docs page up to date as you release new code too.

Also make sure you serve documentation for past versions. If you have consumers on older versions, they need their documentation too.

[[todo - version design system]]

---

Version tokens separate to component library

If it's not embedded into a component library, you can create smaller releases. Rather than blocking a colour in an entire release with new components and breaking changes, you can just tweak a colour for more accessibility.

This allows all adopters to get the most current definition of visual style regardless of their version of the component library. This can be important for company-wide initiatives such as a colour rebrand. All consumers don't need to update their components before a certain date, just their tokens.

Generally, this provides more flexibility at the cost of overhead. It's worth considering how backwards compatible these changes are. If you deprecate a colour used only by an older component, what happens to adopters on that older library version?

Note that token changes _can_ be breaking. Consider a text colour change that now renders a poor contrast, or a font-size change that now wraps a tab component.

[[todo - version design system]]

---

Design system dependencies

- Many components rely on one another
- Versioning them independently can reveal these dependencies in package mangers [[todo - version design system]]
- Recognising these aids making change, as you know how things are composed and what may break
- This is what makes people 'system thinkers'
- Dependencies are not always explicit - styles are often shared even if components are not. e.g. menu, popover, and tooltip may not share components but they probably share styles.
- Would a generated import map help here?
	- Generate + host it somewhere so we can find it
- Automation helps here
- Component demos, documentation, instructions, etc are also dependencies that need updates

---

Tech debt is a tool

Can be used as a resource to accelerate projects when required

TODO

https://swizec.com/blog/tech-debt-is-a-tool/

[[engineering]]

---

pre-mortem and post-mortem

[[engineering]]
[[product]]

---

auto layout in Figma doesn't have the concept of wrapping
as of 20 Apr 2022

---

git add -i
https://git-scm.com/book/en/v2/Git-Tools-Interactive-Staging

[[git]]

---

When searching or replacing in Vim, you can use append `\c` to ignore case, or `\C` to match case.

This overwrites other case settings

e.g. `:%s/radiogroup\C/checkboxgroup`

---

Radix uses `asChild` prop, which is a similar vein to styled-components' `as` prop. It's intended to be a better API to encompass the functionality of `as`.

Allows you to attach a components functionality to a different DOM element. Essentially the parent calls  `cloneElement(children)` with any relevant props. This gives you more control of the child element while retaining the polymorphism. For example, you can pass explicit props to the child element, unlike `as`. 

```jsx
<Dialog.Root>
  <Dialog.Trigger asChild>
	<Button>Open dialog</Button>
  </Dialog.Trigger>
  <Dialog.Content>...</Dialog.Content>
</Dialog.Root>
```

Some implementations of `as` get around this by passing through any props to the parent back to the child component. This brings up new issues, especially around prop naming clashes.

Both `as` and `asChild` require an intermediate component, which may or may not be a big issue. It's important that this intermediate component spreads the props it receives from the parent. In the above example, `Button` internally should spread the props received from `Dialog.Trigger`.

A render props API also exists in this space, which  `reakit` also offers. This gives you the most customisation by allowing the user to use props as needed. For example, you can inspect the props to apply a conditional class, or pass the props to a different prop on the child component.

```jsx
<MenuItem>
  {(props) => {
    const className = "data-active-item" in props ? "bg-blue" : "";
    return <div {...props} className={className} />;
  }}
</MenuItem>
```

Optionally, the implementation could merge any props passed to the parent component. Achieving type safety here may be difficult.

All in all, render props and `as`/`asChild` solve similar but different problems.

[[designsystem]]
[[react]]
[[reactapi]]
[[styledcomponents]]

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

---

`as const` / const assertions

https://stackoverflow.com/questions/66993264/what-does-the-as-const-mean-in-typescript-and-what-is-its-use-case

[[ts]]

---

inline elements + line boxes
already existing page on this?

https://stackoverflow.com/questions/28363186/inline-elements-and-line-height

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

CSS Subgrid

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

