# Don't disable buttons

Disabled buttons have a couple key issues, that merit trying to avoid them in favour of a different UX pattern.

Since the button is disabled, it doesn't give any feedback. It's not possible to click them, so no error messages can be shown on interaction. They often have no tooltip either as that has its own accessibility issues [[20210531112920-tooltips]]. Instead, users will often try to click on a disabled button and then wonder what's wrong.

Disabled buttons often have a lower contrast, often due to the default browser styling when using the `disabled` attribute, or some more explicit styling. Although this is technically WCAG-compliant as disabled buttons don't have a required contrast ratio, it's still less usable for visually impaired users.

A better solution is to just not disable the button. In most cases you'll have frontend error validation that doesn't allow a submission of an incomplete or invalid form (or similar), so why does the button also need to be disabled? Instead keep the button enabled and show an accessible error message detailing the original problem, rather than using that problem as the basis for disabling the button.

If that's not possible, use `aria-disabled` instead, as it keeps it in the focus order so keyboard users can know the button exists.

[[a11y]]
[[html]]