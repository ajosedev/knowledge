# A reason against Atomic Design

[[20211129114322-atomic-design-primer|Atomic Design]] is well and truly mainstream at this stage. However it still has its faults - namely the categorisation behind each level.

The general principle still works, smaller elements build up in various ways to make larger parts. However, the 5 categories it offers often have blurred lines which detracts from its original goal.

The biggest gripe for me is the separation between molecules and organisms. I usually lump these into a single category for ease. Then a general split between atoms vs molecules/organisms makes some sense to me. Atoms are buttons, inputs, molecules/organisms are search fields, comboboxes, etc. Going any further than that starts to introduce confusion and blurriness. Even with this, you get some blurry lines depending on how things are composed.

Another example is a Button with an Icon. Assuming Button and Icon are both atoms, how can a Button (atom) contain an Icon (another atom)?

Additionally, depending on how you define tokens, there starts to be some overlap with 'atom', unless tokens are consider 'subatomic'.

An alternative is to just use 'component' for everything. This aligns closer to models around code. e.g. a React component can contain 0 or more other React components. A design system component (e.g. Card) can contain 0 or more other design system components (e.g. Button). Is extra complexity required?

If the name doesn't properly identify an area, feel free to create a different category name to better communicate the idea. Use the Atomic Design principles rather than the exact naming convention.

[[atomicdesign]]
[[design]]
[[designsystem]]