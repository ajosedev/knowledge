# Source of truth in a design system

Assuming you are making a web product, the source of truth is inevitably frontend code. This is what your users are using, and is visible on the site. Bugs in code are real, bugs in Figma _can_ be ignored. An animation that is planned but never created doesn't exist to the user.

There's a bit of nuance here, though. If you have multiple implementations (e.g. React vs vanilla vs mobile), which of those is the source of truth? Additionally, browsers may render components inconsistently, which one is the source of truth?
Perhaps 'source of truth' is the wrong term here. However, there's still the core principle that code is what users interact with. UI kits and specs are theoretical, code is practical.

It somewhat depends what the goal of a 'source of truth' is.
	If it refers to 'what users see', or how the design system acts in production, then it's code.
	If it refers to 'how things should work', then perhaps a spec makes more sense, or even the UI kit

However this doesn't mean engineers are necessarily the primary audience. It can be argued that designers should be. Change at the design stage is much much cheaper, and often designers roles line up better with design system contributions. For example, they are more aware of gaps in the DS, or UI that doesn't work well, etc. Designers are trying to create solutions which often involves innovation or stretching the bounds of a design system. Engineers are just implementing those solutions. Facilitating feedback and opening discussions at that level can save you a lot of time in the long run.

That all being said, the primary audience for your _documentation_ may be different.

[[communication]]
[[designsystem]]
[[documentation]]
[[figma]]
[[product]]