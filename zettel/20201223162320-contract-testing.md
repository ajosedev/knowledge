# Contract testing

Contract testing helps two separate systems test against one another, without the downsides of orchestrating services (even in dev), or large amounts of mocking. Each service tests against a repeatable contract, rather than each other.

There is a consumer, provider, and api at play when using contract testing. These three must stay in sync for tests to pass. The consumer defines the API contract by setting expectations of the request and then response. The provider pulls contracts to run its tests against.

Contract testing can help build services independently if the contract is agreed upon early, as during development both services can test against the central contract.

Similar to VCR testing.

#concepts
#testing