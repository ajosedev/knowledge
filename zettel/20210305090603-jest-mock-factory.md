# Using `jest.mock`'s factory parameter

`jest.mock` takes a **module factory** argument - a function that returns the mock (a HOF).

To mock just the **default** export, return a standard HOF:
```javascript
jest.mock('../moduleName', () => {
    return jest.fn(() => 'default mock');
});
```

To mock just a **named** export, return an object from the function:
```javascript
jest.mock('../moduleName', () => ({
    foo: jest.fn(() => 'named mock'),
}));
```

To mock both a **default** and a **named** export, return an object with the `_esModule` property:
```javascript
jest.mock('../moduleName', () => ({
    _esModule: true,
    foo: jest.fn(() => 'named mock'),
    default: jest.fn(() => 'default mock'),
}));
```

To only mock a **particular named** export:
```javascript
jest.mock('../moduleName', () => {
    const actual = jest.requireActual('../moduleName');

    return {
        ...actual,
        foo: jest.fn(() => 'named mock'),
    };
});
```

---

Calls to `jest.mock` are hoisted to the top of the code. This creates the limitation that it's not possible to first define a variable and use it inside the factory. An exception is made for variables that start with the work `mock`.

To specify a mock later, e.g. in a `beforeAll`, you can use `mockImplementation` on the existing mock rather than the factory parameter. This will also allow you to change the mock between tests if you wish.

#testing