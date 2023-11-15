# Getting current test info in Jest

Although undocumented, it's possible to get some info about the current test using in [[jest]] using `expect.getState()`.

For example, a global `afterEach` can be used with `expect.getState().currentTestName`.

As of now, I'm unsure if there's a way to use this as a method for outputting snapshots in every test to help with [[refactoring]].

[[testing]]