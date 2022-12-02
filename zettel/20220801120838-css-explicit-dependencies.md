# CSS and explicit dependencies

CSS can often have a disconnect between where styles are defined, and where these styles (e.g. classes) are used. This isn't unique to CSS either, it can exist in SASS also.

This can lead to problems down the road. If you have a component referencing a class that's defined elsewhere but doesn't import that stylesheet directly, how do you know where it's defined? These tenuous links can make maintenance much harder.

On the flip side, CSS modules solves this problem regardless of its goals on scope. The explicit dependencies in theory makes it easier to delete styling code and all of its uses.

[[20220801022400-explicit-dependencies-principle]]

[[css]]