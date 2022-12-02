# Separating CSS files from components for CSS-in-JS

Currently, vanilla-extract doesn't let you co-locate your styles in your component files. They must be in a separate file which is then imported.

The main motivation is to enforce a boundary between what exists at runtime and what exists at compile time (or build-time). With co-location, it blurs the line between runtime (component) and compile time (styles), and makes it easier to write code that doesn't make sense. For example, trying to reference a variable in React that doesn't exist in the styling code at runtime. By keeping them in a separate file it enforces a module boundary with clear, static exports.

https://www.youtube.com/watch?v=23VqED_kO2Q

[[components]]
[[css]]
[[cssinjs]]