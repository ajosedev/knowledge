# Shared state and concurrency

Shared state is incorrect state.

Fetching and updating information should be an atomic operation - don't allow it to change in the middle. Changing it in the middle allows for two processes to 'promise' information, possibly in a conflicting manner.

Instead centralise control to a single location. This is not always easy, but is usually necessary, as random failures are often concurrency issues.

[[concepts]]