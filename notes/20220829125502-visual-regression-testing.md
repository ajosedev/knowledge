# Visual regression testing

Regression [[testing]] ensures that changes to don't break existing functionality.
For UI [[components]], visual regression testing checks for **visual** regressions.

Popular tools include Percy and Chromatic.

For its use case, visual regression often provides better value than unit tests. Especially in a [[designsystem]]. Unit testing often looks at code via CSS properties, or simple checks on the DOM. Both of these could render a different visual output to what you expect.

Testing states and interactivity is usually trickier, as visual regression is usually a simple render snapshot. For interactivity, consider something like a simple E2E test.

Pick the right tool for the job.
