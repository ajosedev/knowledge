#todo 

GraphQL fragments - are they good or bad?

Common to prematurely abstract them
Then multiple components are tied to a single fragment
If one of these components needs additional information, it's easy to add to the fragment
	This leads to extra data fetching which is often unnecessary
The fragment becomes too shared
	And then becomes too big
	Hard to remove a field from a fragment once it's added

However they are useful if the 'core' data requires updating

They're good for data composition as well?
Needs more looking into, but in theory they help you make one fetch request that gets all the data
Subcomponents get their fragments composed into a single query
Similar to [[20220328094742-render-as-you-fetch]]

Fragments are a solution to help avoid unnecessary coupling too. Fragment composition in theory allows each component to dictate its own data requirements, rather than leaking the data requirements into parent components (so you can pass it down as props).
When there's this coupling, updating a nested component's data may require you to update many other components too. Components are no longer encapsulated and self-contained.
	Note that this implies that you make one request high up in your component tree, and pass data down through methods like props. Alternatively, you could make a request on a per-component level. This would solve the coupling, but comes with its own issues around waterfalls, response time, conditional rendering, etc.

Ideally we want that composition to happen automatically by the GQL client. Tooling can take isolated fragments from components and compose them into a single request. That way the requirements are contained, but you effectively get the same result with amount of queries/requests made in GQL.
https://microsoft.github.io/graphitation/docs/learn-graphql/the-design-of-graphql

Overall this is shifting fragments from a way to keep your code DRY
	e.g. these two components want similar data, lets put it in a 'variable' (fragment)
to a 1:1 relationship between fragments and components, which keeps your data requests lean and coupling low.

>Please have some judgment before creating fragments, it should represent data structure that is specific per component. Don't abuse this mechanism by creating fragments with a single field. Try to group it in a way that matches your components needs.
https://the-guild.dev/blog/graphql-codegen-best-practices#fragment-per-component

>Fragments are seen as a way to DRY up code, rather than uniquely expressing the data requirements of a single component, and often entirely ignored by popular GraphQL clients.
>Any GraphQL client for data-driven UI applications that does not make fragments the unit around which everything is built, is not setting you up for success—assuming you have needs similar to Facebook.
https://microsoft.github.io/graphitation/docs/learn-graphql/the-design-of-graphql

Relay is very different from Apollo in this regard. Most consider Relay the most advanced client, which also makes it harder to use.

GraphQL Codegen makes this fragment composition strategy easier, as outlined here: https://the-guild.dev/blog/unleash-the-power-of-fragments-with-graphql-codegen. Many fragments, one query. This is very similar to the method Relay uses and encourages:
>Relay combines the advantages of both of these approaches by allowing components to specify what data they require, but to coalesce those requirements into a single query that fetches the data for an entire subtree of components. In other words, it determines _statically_ (i.e. before your application runs; at the time you write your code) the requirements for an entire view!
https://relay.dev/docs/principles-and-architecture/thinking-in-relay/#fetching-data-for-a-view

Note that you still have to add the fragment manually to the top-level query. Importantly though, if that fragment changes in the component, the query changes appropriately without having to make changes in the parent file. It's still coupled, but far less than writing the data requirements directly into the parent.

Data masking pushes that idea more. It ensures that components can only access the data defined in its fragment definitions. Once again this helps keep coupling low, and allows individual components to be as self-contained and reusable (e.g. portable) as possible. It makes it much harder to implicitly rely on data coming from another component, when the component should be requesting it itself. This also lets you maintain fragments better, as you don't have to verify that a field is being used by a component elsewhere.

https://relay.dev/docs/tutorial/fragments-1/
https://relay.dev/docs/principles-and-architecture/thinking-in-relay

[[graphql]]