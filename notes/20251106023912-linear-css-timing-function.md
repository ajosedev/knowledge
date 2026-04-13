# linear() animations in CSS

CSS now has `linear()` which allows you to plot a linear timing function, as oppose to a mathematical curve used by Bezier curves.

This allows you to create spring and bounce animations with native CSS! The actual generation of the plot points is quite complex to do manually, but tools like https://linear-easing-generator.netlify.app/ & https://easingwizard.com/ can help generate something for you.

Unfortunately there's still a few limitations:
- it's time based, as oppose to other spring animations which use things like stiffness, damping, mass, etc
- interrupting the animation will immediately cancel it, rather than consider things like inertia

[[20251203105654-animation-types]]

[[css]]