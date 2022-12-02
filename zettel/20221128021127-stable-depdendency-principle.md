# Stable Dependency Principle

>The dependencies between software packages should be in the direction of the stability of the packages. That is, a given package should depend only on more stable packages

In this case, stable means 'hard to change', and thus instable means 'easy to change'.

>Whenever a package changes, all packages that depend on it must be validated to ensure they work as expected after the change. Thus, the more packages that depend on an unstable package, the greater the disruption whenever it changes.

So when consuming a package, you want it to be as stable as possible. It lets us get our job done without worrying what's going on inside of it.

As a maintainer of a package, we want to encapsulate things that are likely to change. That way the consumers don't need to worry about any volatility.

https://khalilstemmler.com/wiki/stable-dependency-principle/

[[concepts]]
[[principles]]