# The cost of convenience

aka 'The cost of flexibility'
#todo

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

Keywords: 'use the platform', 'native', 'magic'

https://surma.dev/things/cost-of-convenience/

[[20210705094040-inversion-of-control]]
[[20220627121829-use-the-platform]]
[[20220801022509-principle-of-least-surprise]]

[[abstraction]]
[[concepts]]