# `mocks` vs `resolvers` in GraphQL mocking

`mocks` accepts functions for specific **types**, so the object keys will be types (both built in and custom).
`resolvers` accepts functions for **queries** and **mutations**. So the object keys will be the name of the query/mutation in the schema.

[[20201223160038-apollo-server-mocking]]

[[graphql]]
[[apollo]]
[[mocking]]
[[testing]]
