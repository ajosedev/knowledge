# Intrinsic design

[[intrinsicdesign]] is seen as an evolution of [[responsivedesign]].

>Employing algorithmic layout design means doing away with `@media` breakpoints, “magic numbers”, and other hacks, to create context-independent layout components.

Intrinsic design is closer to declarative (tell the browser 'what') than responsive design, which is similar to imperative (tell the browser 'how').
It definitely feels like more of a 'hands off' approach.

>We say CSS is “declarative”, but the more and more I write breakpoints to accommodate all the different ways a design can change across the viewport spectrum, the more I feel like I’m writing imperative code. **At what quantity does a set of declarative rules begin to look like imperative instructions?**

>They all focus on creating the right _inputs_ rather than trying to control every possible _output_. Leave the final calculations for those outputs to the browser—that’s what computers are good at.

It makes sense to use different [[20220815043921-layout-algorithms-css]] for different needs.

Can even consider [[20210524133704-css-logical-properties]] in this ballpark. Goes back to just telling the browser what, and it figures out what to do.
Even using [[20210218151217-css-font-units]] is similar.

You start to deal with **ratios**, and then let the browser do its thing. You care less about the specific px output, and start to think of things relative to one another.

[[20221219123110-intrinsic-sizes]] is obviously related too.

https://www.smashingmagazine.com/2025/02/taking-rwd-to-the-extreme/

Keywords: 'intrinsic web design', 'IWD', 'intrinsic layout', 'intrinsic design', 'declarative design'

https://gridless.design
https://www.youtube.com/watch?v=5uhIiI9Ld5M
https://moderncss.dev/contextual-spacing-for-intrinsic-web-design/
https://buildexcellentwebsit.es/
https://viewports.fyi/
https://adactio.com/journal/18982

[[css]]
[[design]]
[[layout]]