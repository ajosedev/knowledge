# Content inside of components

#thoughts 
Some components accept arbitrary content. Other components do not. Types aren't always the best way of communicating this, as ReactNode covers a broad range of things. i.e. most of the times you want `string`, but sometimes you need some DOM or something, which necessitates `ReactNode`

You also sometimes need specific JSX sometimes, like a [[20220801045634-design-system-subcomponents]] API. Other times it's restricted by HTML itself, like a button inside of a button. [[20210412143336-compound-components]]

As an example, Button is pretty standard 'label content', it should really be a string.
Something like a ModalBody is expected to take a bunch of different components.

This problem can translate into Figma as well. Using [[20241121120807-component-slots]] lets you change inner content without detaching the component. However you may not want this for everything.

There's a somewhat intuitive understanding here, especially for engineers, but it's hard to document. This is important for [[ai]] as it helps guide the model to what's acceptable and what's not, rather than just guessing.

Ideally there's a good classification for this. Some half ideas:
- 'Rich content'
- 'String content'
- 'Label' vs' Structured' vs 'Composed' content

[[components]]
[[componentapi]]
[[documentation]]
[[designsystem]]
[[designsystemapi]]
[[html]]