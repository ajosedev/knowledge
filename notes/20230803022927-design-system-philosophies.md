# Core philosophies for design systems

This is not all encompassing as I have too many docs for that. However this is some key things I think are important to have when starting out a [[designsystem]]

https://www.gabe.pizza/notes-on-component-libraries/
```
1.  **It should be easy to take a design and translate it into UI code.** Props should map intuitively to design system documentation in Figma or otherwise. Components should look correct without applying overrides.
2.  **A component should, for the most part, act as an opaque box to a parent consuming it.** It should not leak details about its internals or allow injecting arbitrary code/styles. Data goes in; markup comes out.
3.  **The Obvious Thing, The Easy Thing, and The Right Thing should overlap most of the time.** A developer under time pressure is _usually_ going to reach for the easiest solution. Ideally, the easiest solution is the obvious one. And the obvious should be [what I wanted the developer to do in the first place](https://www.youtube.com/watch?v=SxdOUGdseq4).
4.  **Doing The Wrong Thing should be at least uncomfortable, at worst impossible.** Allow for escape hatches when necessary, but make them feel bad. The developer should think, “I should open an issue so that I don’t have to do this again.”
```

"Components should usually take up all horizontal space given" [[20220720010623-reusable-components-and-widths]]
"Components should probably not position themselves." [[20200402104023-components-margin]] [[20210519122422-first-class-space]]

Consider how [[20220704125509-design-systems-snowflakes]] should work. Should `className` and `style` actually work on your props, or should it be a more explicit escape hatch? (e.g. `UNSAFE_className`)

You need [[20220829125502-visual-regression-testing]]

Where possible, [[20220627121829-use-the-platform]]

Friction can be a good thing. Similar to the last point above, escape hatches should be less pleasant to use than the happy path.

[[20210908155508-flexibility-components]]
[[20220621083440-design-system-flexibility]]
[[20220801011940-pit-of-success]]

[[components]]
[[componentapi]]
[[designsystemapi]]