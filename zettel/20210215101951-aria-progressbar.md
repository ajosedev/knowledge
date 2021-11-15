# Accessible progress bars

Use the aria role `progressbar`.
This should be used along with:
`aria-valuenow` for the current value, which should dynamically update
`aria-valuemin` for the minimum value
`aria-valuemax` for the maximum value

If the value is indeterminate, don't use `aria-valuenow`.

If the progress bar is describing a particular region of a page, use `aria-describedby` to point to the status and `aria-busy` on the region.

`aria-valuetext` can be used instead of `aria-valuenow` for a better text representation.

[[a11y]]