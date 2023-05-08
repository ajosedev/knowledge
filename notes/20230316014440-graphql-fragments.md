# Fragments in GraphQL

Are they good or bad?

I think there's two answers, as there's more or less two ways of using framgents:
1. A tool to DRY up code - sharing a common schema of requested data
2. A tool for data composition

In general, the first one can go sour quickly, but the second is a core part of [[graphql]].

## Using them to DRY code

This works well in theory, but can very quickly become problematic. A common example is prematurely abstracting common requests into a fragment ([[20221026123121-the-wrong-abstraction]]), and then tying multiple components to it. As additional data is required, it's added to this shared fragment.

After some time, you've got a fragment that's too large, overfetching data on some components, and unmaintainable as you don't know how each field is being used.

[[20210202103254-coupling-cohesion]]

## Using them for data composition

The alternative is to use them for data composition, which in theory helps the coupling problem, and also improves render fetch waterfalls [[20220328094742-render-as-you-fetch]]. A component specifies what it needs in a fragment, and this gets composed into a single query. In this approach, fragments aren't shared (much), they are composed.

It's common for components using GraphQL to leak data requirements up the tree. This is usually a naive solution to the waterfall problem - put all the data requests (and requirements) in the parent, and pass down data. This coupling means updating a nested component's data may require changes in many other components.
Fragments offer a solution here. Each component dictates its own data requirements through a fragment. It keeps each component encapsulated, and truly allows them to be portable and maintainable. A fragment should be close to 1:1 with a component. This also helps make the fragment more maintainable, as the fields being used are more easily searchable.

There's some 'magic' involved in getting the fragment requests up the tree, but this can be accomplished with tooling like Relay or GraphQL Codegen. Relay is different in Apollo from this regard, and is often seen as the most 'advanced' client because of features like these. Alternatively the fragment can be added manually. Even in a manual approach, changing data requirements should have a minimal impact on other components. Keep the coupling low.

>Please have some judgment before creating fragments, it should represent data structure that is specific per component. Don't abuse this mechanism by creating fragments with a single field. Try to group it in a way that matches your components needs.
https://the-guild.dev/blog/graphql-codegen-best-practices#fragment-per-component

>Fragments are seen as a way to DRY up code, rather than uniquely expressing the data requirements of a single component, and often entirely ignored by popular GraphQL clients.
>Any GraphQL client for data-driven UI applications that does not make fragments the unit around which everything is built, is not setting you up for success—assuming you have needs similar to Facebook.
https://microsoft.github.io/graphitation/docs/learn-graphql/the-design-of-graphql

GraphQL Codegen makes this fragment composition strategy easier, as outlined here: https://the-guild.dev/blog/unleash-the-power-of-fragments-with-graphql-codegen. Many fragments, one query. This is very similar to the method Relay uses and encourages:
>Relay combines the advantages of both of these approaches by allowing components to specify what data they require, but to coalesce those requirements into a single query that fetches the data for an entire subtree of components. In other words, it determines _statically_ (i.e. before your application runs; at the time you write your code) the requirements for an entire view!
https://relay.dev/docs/principles-and-architecture/thinking-in-relay/#fetching-data-for-a-view

[[20230411030255-graphql-data-masking]]