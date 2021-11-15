# Using objects as a dep in useEffect

Using objects in the deps array of `useEffect` can lead to unwanted calls. As the check to run is referential, if the object reference changes (without any values inside changing), this will lead to the `useEffect` running. This will happen if using an object from props, for example.

However, there are a couple times where it's okay as long as you're aware. The object reference inside of a `useState` doesn't change until its setter is called. If the setter is called at all (even with the same object or using the current state value), it will update the reference.

[[react]]