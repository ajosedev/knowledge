# Don't reimplement functionality in tests

This is similar to the ideas of [[20221219011420-testing-implementation-details]] around creating a test user.

Rather than testing implementation details, the concern here is re-creating implementations in your tests and testing against those. Similar to the above, you're still not testing your software. This can give you false confidence that changes in your software will be tested, when in fact you're testing a parallel implementation created just for tests.

There's a balance here though - what do you actually care about in your tests? Sometimes re-implementing a function for a test is useful, but you need to be aware you're doing it. Otherwise you're giving yourself false confidence.
[[20201223160329-mocks-vs-stubs]]

This is usually a [[smells]] that you need to do some [[refactoring]] to make your functions more pure and testable. Maybe your code is too [[20210202103254-coupling-cohesion]].

[[testing]]