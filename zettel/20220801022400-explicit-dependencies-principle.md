# Explicit Dependencies Principle

> Methods and classes should explicitly require (typically through method parameters or constructor parameters) any collaborating objects they need in order to function correctly.

Classes with explicit dependencies are more honest. They can be swapped out more easily, and are easier to maintain and change.

Implicit dependencies are harder to analyse for side effects. The codebase must be manually searched for call sites, and are generally more brittle.

e.g. how do you refactor something when there are no explicit ties to it? How do you know what call sites rely on this, or inversely, how do you know what each call site relies on?

https://principles.dev/p/explicit-dependencies-principle/

[[concepts]]
[[principles]]