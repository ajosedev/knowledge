# Advanced Perceptual Contrast Algorithm (APCA)
WCAG3 updates its colour contrast calculations to use APCA (Advanced Perceptual Contrast Algorithm). This is an overhaul that should better align the objective results to human perceptions of colour.

The current calculation is the luminance of the foreground colour divided by the luminance of the background. Luminance is problematic as our sense of how light a colour is not perfectly correlated with its luminance value. If a colour's luminance is decreased by X%, it's not perceived as X% darker.

Unlike the old algorithm, ACPA:
- Takes font size and weight into account. Thinner fonts are scored worse.
- Calculates differently when swapping between the foreground and background colours. Text has a lower visual area and thus lower contrast
- Is perceptually uniform. Humans don't perceive contrast linearly across hue and lightness and APCA takes this into account.

The scoring system has changed in turn, rather than a ratio, it is now scored out of 100.

https://github.com/Myndex/SAPC-APCA/blob/master/documentation/WhyAPCA.md#why-the-new-contrast-method-apca

[[a11y]]
[[colour]]
[[design]]