# Wrapping external dependencies

The primary advantage of wrapping external dependencies is that it **reduces the surface area of dependencies**.

If the dependency updates its API, you have to update multiple call sites. With a wrapper, you only have to update a single place. [[20200307101703-easy-to-change]].
This is also true if a dependency is deprecated, and you need to replace it with a new dependency in the same space.

It also helps with mocks, as you often mock the external dependency directly. A central wrapper enables a central dependency-agnostic mock. However, this mock needs to be rock solid to make sure it's actually executing the underlying code properly.

Wrappers allow for a better API, or one more suited to what you need. However you don't have to wrap everything. There's extra work, and some things are too complicated for the tradeoff.

'Wrapper' here doesn't refer to the design pattern. 'Facade', 'adapter', or anything else that sits as an abstraction between your code and the dependency is acceptable. The exact design pattern depends on your needs and the dependency.

[[concepts]]