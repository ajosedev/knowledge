# Implicit vs explicit labels for form controls

tl;dr - use explicit labels

Implicit labels refers to using a form control nested inside of a `label`, which implicitly ties the two together without requiring a `for`/`id`. This creates valid HTML, but is not recommended by WCAG for accessibility reasons, in favour of explicit labels.

The reason being that implicit labels are flaky and inconsistent on various screen readers, while explicit labels are more bulletproof.

https://www.w3.org/WAI/tutorials/forms/labels/#associating-labels-implicitly

> Generally, explicit labels are better supported by assistive technology.

https://www.w3.org/TR/WCAG20-TECHS/H44.html

> The objective of this technique is to use the `label` element to explicitly associate a form control with a label

[[a11y]]