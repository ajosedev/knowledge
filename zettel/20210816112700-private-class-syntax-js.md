# Private class syntax in Javascript

Class fields are public by default, but private class members can be created using a hash `#` prefix. These cannot be referenced outside of scope, and and the `#` is considered part of the name.

This is Javascript specific, so it doesn't need Typescript at all (like `private`).

```javascript
class ClassWithPrivateField {
  #privateField;
}

class ClassWithPrivateMethod {
  #privateMethod() {
    return 'hello world';
  }
}

class ClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD;
}

class ClassWithPrivateStaticMethod {
  static #privateStaticMethod() {
    return 'hello world';
  }
}
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields

#js