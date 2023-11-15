# Hidden until-found collapsible

The `hidden` attribute avoids rendering the content of the element. Unfortunately this also makes the content within difficult to find, for elements that conditionally hide content, e.g. an accordion.
The `until-found` value for the `hidden` [[html]] attribute allows a user to find text within a collapsed container.

This also allows search engines to crawl this content.

Unfortunately, browser support for this value isn't great. You can use the `beforematch` event handler to expand all hidden content, as a not great workaround for this problem.

https://developer.chrome.com/articles/hidden-until-found/
https://caniuse.com/mdn-html_global_attributes_hidden_until-found_value

[[a11y]]
[[html]]