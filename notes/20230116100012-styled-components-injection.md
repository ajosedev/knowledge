# How styled-components injects styles

In development mode, styled-components injects styles in the DOM through a `style` tag. As more styles are created, more styles are appended to this single tag.
e.g. `document.createElement('style')`

In production mode, styles are injected directly into the CSSOM. This explains why you can't see classes in the DOM anymore, and why in the past you haven't been able to properly edit those styles in the browser.
e.g. `document.styleSheets[0].insertRule()`

This functionality can be disabled with `SC_DISABLE_SPEEDY`, or through the `StyleSheetManager` component with the `disableCSSOMInjection` prop.
https://styled-components.com/releases#v4.1.0
https://styled-components.com/docs/api#stylesheetmanager

https://www.joshwcomeau.com/react/demystifying-styled-components/
https://stackoverflow.com/questions/53486470/react-styled-components-stripped-out-from-production-build

[[css]]
[[cssinjs]]
[[js]]
[[styledcomponents]]