# Inversion of control

#todo

Super simplified: Usually you would build a nice clean abstraction that accomplishes one thing well. However over time it needs to support more use cases and thus needs more logic and added control flow. Over time, the abstraction becomes less clean and starts to become a maintenance nightmare.

A cleaner solution may be to move the complication to the user, and allow the abstraction to do less. This is similar to how `.map` and `.filter` work, where the user provides the callback function to run on each element in the array when the function is called. This allows for the user to create the functionality they need without cluttering the original abstraction.

If this does lead to duplicated code, the original abstraction can be built upon and composed to provide extra support through HOFs or similar. This keeps the original abstraction clean and allows code to remain DRY.

https://kentcdodds.com/blog/inversion-of-control
https://martinfowler.com/bliki/InversionOfControl.html

[[20210816103245-state-reducer-pattern]]

[[abstraction]]
[[principles]]