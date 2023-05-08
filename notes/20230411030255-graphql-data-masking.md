# Data Masking in Relay

Data Masking is an approach recommended by Relay, a [[graphql]] client.

Following on from [[20230316014440-graphql-fragments]], it ensures that components can only access the data defined in its fragment definitions. This helps keep coupling low, and allows individual components to be as self-contained and reusable (e.g. portable) as possible.

It makes it much harder (read: impossible) to implicitly rely on data coming from another component. This is because the component that requires the data should be the one requesting it. This also lets you maintain fragments better, as you don't have to verify that a field is being used by a component elsewhere.

https://relay.dev/docs/tutorial/fragments-1/
https://relay.dev/docs/principles-and-architecture/thinking-in-relay