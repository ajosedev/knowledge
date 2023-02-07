# Don't test implementation details

>The more your tests resemble the way your software is used, the more confidence they can give you.

As always, there's a trade-off here. The most realistic representation of this is integration tests, but they are much slower than unit tests. In general though, it's a good rule to follow.

Furthering the point, there's a general mantra: don't test implementation details.
If you change your code in a way that isn't observable to the user, all of your tests should work.
Instead, **test what the user can see.**

For this reason it's best to avoid shallow rendering. Shallow rendering effectively forces you to test implementation details, as it doesn't render the full tree. Rather than clicking on buttons, you have to call methods and internal functions.
A user doesn't see methods and internal functions though, they see buttons and text.

Avoid creating a 'test user'. A test user sits in between the end user and the developer, and relies on APIs that neither of them care about - implementation details. Like testing implementation details, creating a test user can create tests which:
- fail when you refactor application code - false negatives
- don't fail when you break application code - false positives

This is the mantra pushed by libraries like `testing-library`.

[[20230130021729-write-mostly-integration-tests]]

https://twitter.com/kentcdodds/status/977018512689455106?lang=en
https://kentcdodds.com/blog/testing-implementation-details
https://twitter.com/dan_abramov/status/1065663012541992963

[[testing]]