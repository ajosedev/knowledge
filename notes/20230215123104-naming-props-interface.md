# What to name the component props interface in React?

In [[react]], it's fairly common to create a separate [[ts]] Interface ([[20211203050950-types-interfaces-typescript|or Type]]) to define the props for a component.

Front runners seem to be `Props`, or `ComponentNameProps`. I personally advocate for the latter, for several reasons:
- Easier to distinguish if there's multiple components in a file
- Adds meaningful context when exported. If it's not currently exported, it may be exported later.
- Improves searchability