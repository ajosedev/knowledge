# Slope intercept library design

Slope-intercept can be used as a mental model to help with library design.
Intercept - the initial cost of learning and setup for a library
Slope - how the library's complexity changes as you use more of it

The units are not important, it's just a concept.

This can be a helpful tool when creating a new library. How much complexity should be front loaded, vs how much should be spread through deeper usage. This taps into the [[20220328091816-pareto-principle]] and how I approach it. Usually I design for the 80% and let the 20% be more difficult. The slope-intercept concept makes you nuance that distinction a bit more.

Some ways of tweaking this balance could involve: what is the setup like, how much magic is abstracted away, are parameters set globally or in every call, are there implicit defaults, etc.

Ideally everything would be near-zero for intercept and slope, but that's not realistic. However, using 'layers' can help you get closer. Different APIs at different levels of abstractions ([[20220801015113-cost-of-convenience]]) can allow for a simple API for many use cases, and then a more complex API for remaining use cases. In this case, the former would offer a low-intercept and a high slope, and a latter with a higher intercept, but lower slope.

https://jakewharton.com/slope-intercept-library-design

[[abstraction]]
[[api]]
[[engineering]]