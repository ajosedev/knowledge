# Impossible states

This refers to the idea of allowing a developer to create an 'impossible state' by passing multiple related options that don't work together.

If one option eclipses another or multiple options share the same concern, they should be expressed as singular option with different possible values. For example, pass colour variants in a singular 'colour' variable, rather than individual colour options.

Since the end result of passing conflicting options depends on the implementation of the called code, it can produce undesired or confusing results.

For a more concrete example see [[20210316112103-multiple-boolean-props]]

[[concepts]]
[[smells]]