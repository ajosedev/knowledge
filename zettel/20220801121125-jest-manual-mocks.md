# Jest manual mocks

Some scratchy #thoughts on Jest's manual mocks.

Are Jest manual mocks bad?

Allow you to globally mock things. It works with a file located at the import path within a `__mocks__` folder.
Node modules are mocked automatically, otherwise a `jest.mock(./moduleName)` should be required.
However working with aliases, this gets a little confusing.

Good points: Keeps things DRY
Bad points: 'Magic' happens away from the code, hard to know if something relies on a dependency, hard to find as you're looking for a filepath not code

This violates the [[20220801022400-explicit-dependencies-principle]]
If something needs a mock, shouldn't it mock it itself?
Having it in a global `test-setup.ts` file or similar doesn't really solve this problem either

Is the problem explicitness? Can keep the code DRY somewhere, but then if it's explicitly imported, it's fine. Explicit dependencies are good. Magic ones are not.

https://jestjs.io/docs/manual-mocks

[[jest]]
[[mocking]]
[[testing]]