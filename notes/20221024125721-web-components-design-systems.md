# Web Components for design systems

Organisations often have their web apps powered by different technologies, frameworks, etc. A home page in PHP, and a SPA 'platform' in React, for example. Ideally a design system would span across these. You want the consistency, speed, and ease of use, regardless of what technology you're using.

It's not Web Components vs a framework, it's Web Components **with** a framework. Consider the Web Component handling the very front of the frontend (markup, styles, presentation), while the framework handles the back of the frontend (data, routing, logic).

When it comes a design system, think of Web Components as a base layer. Frameworks can build on top of this, allowing for frameworks to augment them as they please. However the code is still quite DRY, and you get many [[20220509045044-design-system-why|benefits of the design system]] across these frameworks.

Not all design system components require complicated JS however. But, Web Components are based on JS, and require them themselves. Sometimes a component is simple - it's essentially a `div` with some classes attached to it. However, the DX of Web Components is good - you want to ask for a component and give it attributes, and receive back the necessary HTML. JS doesn't need to be in the picture.

The answer to this problem is a build step, through tools like WebC and Enhance. These will let you write in a Web Component format, but compile to raw HTML before it makes it to the browser.

https://bradfrost.com/blog/post/lets-talk-about-web-components/

[[20221025093009-multi-brand-design-systems]]

[[browsers]]
[[components]]
[[componentapi]]
[[css]]
[[designsystem]]
[[htmll]]
[[js]]
[[web]]