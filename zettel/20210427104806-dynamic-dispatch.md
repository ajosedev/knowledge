# Dynamic dispatch

When a language has dynamic dispatch, it means we can't be 100% sure which function `obj.method()` will call until the code runs. For example, in JS, we need to take the current value of the `obj` variable, search for a property called `method` on that object, and keep searching for it on the prototype chain until we find it.

Lower level languages use static dispatch instead.

#concepts
#js