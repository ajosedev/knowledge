# Backend for Frontend (BFF)

A BFF is essentially a pattern that creates a single backend per user experience. Rather than having a single general-purpose API backend that all user experience (e.g. Android App, Web App, etc) references. The goal is to avoid having a general-purpose API which has to cater to everything and inevitably gets more bloated and becomes a bottleneck when rolling out changes.

By design the BFF is [[20210202103254-coupling-cohesion|coupled]] to the specific user experience, and thus should be maintained by the same team. It's expected that as the UI updates, so too does the API of the BFF. Each BFF can be tailor-made for the user experience, allowing it to manipulate data, communicate with the frontend in the best way, etc.

In a [[microservices]] world, the BFF is responsible for collating information from different services, to avoid adding said complexity to each user experience. Note that having a BFF per user experience does add duplication, as each BFF may be requesting similar data. Crucially, this duplication is split across different verticals (i.e. services), which in theory makes this less of a problem.
	In theory if you notice duplication, you can [[20200307105301-dry|DRY]] that duplication into a new service which multiple BFFs call, rather than each BFF doing the collation/data manipulation.

---

#todo
What should be in them? What shouldn't?

How does this compare to a single GraphQL layer?
	Similar goal, different implementation?
	GraphQL can be used for the BFF, but the real question is using GraphQL as one big BFF across multiple apps
	Different relationship. 1 BFF per Frontend, can have 1 GraphQL layer for multiple frontends

How do they interact with Microfrontends?
	Helps each MFE stay separated and avoid overfetching/overrequesting
	Up to the BFF to handle that problem, and it makes sense for a BFF to be linked to multiple backend services

https://samnewman.io/patterns/architectural/bff/

[[architecture]]
[[data]]
[[graphql]]