# Finding nodes in Figma

This often occurs when you want to track usages of a specific thing, like a [[20250306103721-remote-variables-figma]]. Here's the best way I've found to tackle it (example below uses finding a variable):
- Get the variable ID, which will probably be a larger ID than most due to it being a reference
- Using the Figma API, dump the UI Kit into JSON (https://www.figma.com/developers/api#get-files-endpoint)
- Scan the JSON for Node IDs that reference the variable
- Append the link to the UI Kit to find the specific node, e.g. https://www.figma.com/design/fileKey?node-id=62972-2825
	- Unsure if there's a better way of doing this
- Deal with the variable as appropriate

If you're looking for a specific variable, the `Find Variables` plugin is handy here.
https://www.figma.com/community/plugin/1255559699053207361

[[figma]]