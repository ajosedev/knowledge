# Accessible naming rules

Heed warnings and test thoroughly - name calculation is complex, so follow guidelines when you can.

Prefer visible text - much simpler, prevents bugs, and keeps visual and non-visual UI the same. Visible text is much more apparent, meaning its less likely to go out of date when updating.

Prefer native techniques - rely on `label`, `caption`, etc. While less flexible, they're more reliant.

Avoid browser fallback - don't use browser fallbacks for accessible names such as `title` and `placeholder`. Both offer low quality accessible names.

Compose brief, useful names - long or unclear names make a UI very difficult for non-visual uses.

[[a11y]]