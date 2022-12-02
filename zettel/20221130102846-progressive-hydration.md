# Progressive Hydration

>Delay loading JavaScript for less important parts of the page

[[20220912120502-server-side-rendering]] allows us to handle some of the grunt work on the server. Since the markup is generated, we get a faster First Contentful Paint (FCP). However since Javascript still needs to [[20221130103211-hydration|hydrate]] everything on the client, we can have a slower Time to Interactive (TTI).

This hydration process can be slow, depending on the application size. An alternative approach is to progressively hydrate nodes over time. The more important parts of the page become interactive first.

This lowers the amount of Javascript required (and requested) in order to make the page interactive. This technique promotes (and somewhat relies on) [[20220911060950-code-splitting]]. The developer needs to identify what parts are the most important and need to be interactive the quickest.

[[architecture]]
[[infrastructure]]
[[rendering]]