# Dependency Injection

Dependency Injection (DI) is a simple concept with a fancy term - give objects its instance variables, don't instantiate anything inside of a definition (e.g. routine, class, etc). Instead, it's better to pass the dependency to the definition, e.g. through a constructor.

This helps with maintaining the single responsibility principle (SRP)[[20220801053049-solid]], testing as things can be stubbed more easily, maintainability in case the dependency needs to be changed, and in general lowers coupling.

[[concepts]]
[[principles]]