# Open-Closed Principle

> Objects or entities should be open for extension but closed for modification.

This means that a class should be extendable without modifying the class itself.

Take a function with a hard-coded filepath. If that path needs to be changed, the method itself will need to be modified. If the filepath was a parameter instead, the behaviour could be modified without changing the function itself.

[[principles]]