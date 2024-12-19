# The recipe layer

Here's a [great article](https://bigmedium.com/ideas/design-system-ecosystem.html) around the different layers of the design system. One that I really agree with is the 'recipe layer'.
>which contains composed UI components to be used consistently across specific contexts (like a product or product family), but aren’t reusable across the entire organization.

Recipes are sometimes also called 'compositions', as was done at Vista for a brief time.

Anecdotally we did something similar at 99designs, and it worked really well. Essentially they are just smaller UI component libraries that built off the core design system. It's almost like an incubator.

These components can be compositions of more agnostic DS components, but can also be new components for very specific needs. Or even modifications/additions to existing components to fulfil a new need. Regardless, they should use the features of the DS as much as possible - tokens, layout components, really atomic components, etc. **Some** of the recipe layer can make their way into the design system [[20220704124529-design-system-harvesting]], but others may stay at the recipe layer forever (e.g. specific card components) - and that's okay!

This works really well at allowing you to slow down and only bring in versatile, proven, and useful components into the design system [[20231027111000-design-system-speed]]. Until then, teams still have all the benefits of sharing code, and the DS team isn't a bottleneck. Additionally, teams have the ability to better collaborate and innovate with one another, something which is much harder to do at the DS pace layer.

[[20220808103811-spotify-encore]]
[[20211122112956-design-system-component-hierarchy]]

https://shinytoyrobots.substack.com/p/the-hub-and-spoke-design-system-model
https://bigmedium.com/ideas/the-art-of-design-system-recipes.html

Keywords: expansion packs, design system ecosystem

[[20220704011551-tiered-design-systems]]

[[architecture]]
[[components]]
[[designsystem]]
[[designsystemapi]]
[[designsystembranding]]
[[product]]