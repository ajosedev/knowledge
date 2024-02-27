# Finding elements in dev tools

The DOM search in dev tools follows essentially a CSS syntax with some additions. This means that searching for individual elements (e.g. `<a>`) can be hard, as you'll get lots of false positives.
Additionally, it searches content, meaning short words (or letters) are impossible to find.

To improve the search, you can prefix things with a parent selector, e.g. `html`, similar to a CSS selector, e.g: `html a`. This means that content is no longer searched for, and only `<a>` elements will be found.

This also means that you can use selectors such as `[role=""]`.