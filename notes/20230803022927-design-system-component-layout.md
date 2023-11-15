#todo - figure out the best way to breakdown this doc and all the other docs

Design system component philosophies

See how this lines up with existing articles. Search the [[designsystem]] tag and see what I can link out to?

https://www.gabe.pizza/notes-on-component-libraries/
```
1.  **It should be easy to take a design and translate it into UI code.** Props should map intuitively to design system documentation in Figma or otherwise. Components should look correct without applying overrides.
2.  **A component should, for the most part, act as an opaque box to a parent consuming it.** It should not leak details about its internals or allow injecting arbitrary code/styles. Data goes in; markup comes out.
3.  **The Obvious Thing, The Easy Thing, and The Right Thing should overlap most of the time.** A developer under time pressure is _usually_ going to reach for the easiest solution. Ideally, the easiest solution is the obvious one. And the obvious should be [what I wanted the developer to do in the first place](https://www.youtube.com/watch?v=SxdOUGdseq4).
4.  **Doing The Wrong Thing should be at least uncomfortable, at worst impossible.** Allow for escape hatches when necessary, but make them feel bad. The developer should think, “I should open an issue so that I don’t have to do this again.”
```

Are there more guidelines? e.g. cost of convenience/flexibility?

#todo - mine the article for more things

"Components should usually take up all horizontal space given" [[20220720010623-reusable-components-and-widths]]
"Components should probably not position themselves." [[20200402104023-components-margin]] [[20210519122422-first-class-space]]

[[20210908155508-flexibility-components]]
[[20220621083440-design-system-flexibility]]
[[20220801011940-pit-of-success]]