# No ARIA is better than bad ARIA

>While ARIA is designed to make web pages more accessible, if used incorrectly, it can do more harm than good.

> Functionally, ARIA roles, states, and properties are analogous to a CSS for assistive technologies. For screen reader users, ARIA controls the rendering of their non-visual experience. Incorrect ARIA misrepresents visual experiences, with potentially devastating effects on their corresponding non-visual experiences.

A role is a promise - when adding a role to an element, it's a promise that you've also added any other accessibility requirements needed by that role, e.g. keyboard interactions.

ARIA can both cloak and enhance - it can cover up or override the original semantics or content. Make sure when you do so, you do it right.

[[a11y]]