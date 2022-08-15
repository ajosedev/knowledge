# Avoiding too many parameters in a function

aka Parameter Object

Over time, functions can grow in complexity and the amount of parameters they have. *Clean Code* suggests that the ideal amount of parameters for a function is 0, with 3 to be avoided.

Too many parameters could also be a sign that you're not following the Single Responsibility Principle [[20220801053049-solid]].

Some solutions:
- Parameter Object. Replace duplicated parameters with a single object.
- Refactor into smaller functions.

By moving away from this smell, you:
- Get more readable code
- Keep things [[20200307105301-dry]] and [[20200307101703-easy-to-change]]
- Makes it easier to pass some, but not all of the parameters as position can matter in some languages.

[[concepts]]
[[smells]]