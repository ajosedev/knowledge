# Liskov Substitution Principle

> Let q(x) be a property provable about objects of x of type T. Then q(y) should be provable for objects y of type S where S is a subtype of T.

This means that every subclass or derived class should be substitutable for their base or parent class.

The related smell here is scatted conditional logic, checking for the specific type of an object.

[[principles]]