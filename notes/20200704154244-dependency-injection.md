# Dependency Injection

Dependency Injection (DI) is a simple concept with a fancy term - give objects its instance variables, don't instantiate anything inside of a definition (e.g. routine, class, etc). Instead, it's better to pass the dependency to the definition, e.g. through a constructor.

This helps with maintaining the [[20221010033955-single-responsibility-principle]], testing as things can be stubbed more easily, maintainability in case the dependency needs to be changed, and in general lowers coupling.

https://www.jamesshore.com/v2/blog/2006/dependency-injection-demystified

[[concepts]]
[[principles]]
[[testing]]