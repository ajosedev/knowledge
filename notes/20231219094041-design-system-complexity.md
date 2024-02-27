# Design system complexity

Each thing in a design system has (or should have) a purpose or intention.

The more things you have, the harder it is to understand the purpose of things. Especially if they can be used in combination with each other

There are potential solutions to help reduce complexity but keep options. Most of them have various downsides:
- Compartmentalisation - these things usually need to interact with each other, and it's difficult to create good seams
- Reducing connections - does reduce permutations, but often feels random and increases cognitive load
- Abstraction - probably the best solution, but increases maintenance cost

The best way to solve this is reduction. Reduce the amount of things offered, and you don't have to deal with complexity, or [[20231219102038-combinatorial-explosion]].

https://pjonori.blog/posts/systems-math-explosions/

[[designsystem]]
[[designsystemapi]]