# Apollo server mocking

`apollo-server` (not `apollo-client`) can mock by setting the `mocks` property as a boolean, in which it exchanges data, type for type.

`graphql-tools` works simlarly: https://www.graphql-tools.com/docs/mocking

`graphql-faker` seems to require you to create a resolver with the @fake decorator, which is not ideal.
Ideal scenario would be like `apollo-server`, mocking type for type by default, using custom types as appropriate, and then being able to overwrite.

https://www.freecodecamp.org/news/a-new-approach-to-mocking-graphql-data-1ef49de3d491/

[[graphql]]
[[mocking]]
[[testing]]
