# ARIA Landmark Regions

Useful for providing organisation and structure to the webpage. Screen readers can use landmark roles to provide keyboard navigation for important sections of a page. Additionally these roles can be used as targets in '[[skip links]]'.

Not all of these regions should be used at a top level. Some landmark roles can be nested to identify parent/child relationships of the information as necessary.

Too many landmark roles create 'noise', so use sparingly.

Screen readers announce the type of role for landmark roles. For this reason, don't describe what the landmark is in its label - 'Primary navigation' -> 'Primary navigation navigation'.

If a landmark is only used once, it may not require a label. If there are multiple instnaces of the same type of landmark, add a unique label *unless* the content and purpose of separate instances are identical (e.g. two pagination controls above and below a list). ^cf4667

[[20211209092931-aria-landmark-regions-html]]
[[20211209093055-aria-landmark-roles]]

[[a11y]]
[[html]]