# When creating new components, break them

TODO

Try to build something unintended, to help find out the footguns and the DX for developers that don't necessarily know (or care) about the underlying decision. Can I throw a `div` inside of here, will it break styling, a11y, etc? DX is an important part of good component design, so using your components should be _easy_.

Try to build something different, to know you can still build the 20% of use cases. Often we create for the 80% which makes sense, but we still want the component to be used for the 20% of cases that break some of the rules. Ideally this doesn't involve new components or bespoke implementations, rather your component can potentially be used in a slightly different way to achieve the goals. A solution to this could be to export primitives with safe typings, so they have to pick up the slack of what your component does on its 'happy path'.

Still optimise for the main path, but allow users to create different things, if they need to. This should help your component v1 be better, rather than having to inevitably implement new variants, props, etc to satisfy one-off needs.

[[components]]
[[react]]
[[reactapi]]