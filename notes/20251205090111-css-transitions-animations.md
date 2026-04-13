# CSS Transitions & Animations

A **transition** goes from a start state to an end state.
In CSS, they require 'before-change' and 'after-change' styles. You need some sort of trigger to apply these different styles usually, like a class, or a [[20231030090737-css-pseudo-states]].
With [[20251203031422-starting-style-css]], you can declare the before-change styles for an element that is just rendered. Allowing you to make entry transitions.

Exit transitions can also be made, using `transition-behaviour: allow-discrete`. Using the `allow-discrete` value will make properties like `display` wait until the end of the transition to switch to `none`, making the transition visible throughout all its duration.

An **animation** allows for more fine grained control, using keyframes. These let you dictate multiple different styles at steps (a keyframe) over the course of the entire animation.
They can be activated without a class-like trigger, which sometimes makes them more appropriate.
Additionally they can loop, play in different directions, etc.

A transition is effectively an animation with two steps. An animation allows more control.

[[20251203105654-animation-types]]

[[css]]