# Transitions in React

A transition is a new concept in React to distinguish between urgent and non-urgent updates.
- **Urgent updates** reflect direct interaction, like typing, clicking, pressing, and so on.
- **Transition updates** transition the UI from one view to another.

For example, when you select a filter in a dropdown, you expect the filter button itself to respond immediately when you click. However, the actual results may transition separately. A small delay would be imperceptible and often expected.

Typically, for the best user experience, a single user input should result in both an urgent update and a non-urgent one. You can use startTransition API inside an input event to inform React which updates are urgent and which are “transitions”:
```jsx
import {startTransition} from 'react';

// Urgent: Show what was typed
setInputValue(input);

// Mark any state updates inside as transitions
startTransition(() => {
  // Transition: Show the results
  setSearchQuery(input);
});
```

Updates wrapped in startTransition are handled as non-urgent and will be interrupted if more urgent updates like clicks or key presses come in. If a transition gets interrupted by the user (for example, by typing multiple characters in a row), React will throw out the stale rendering work that wasn’t finished and render only the latest update.

-   `useTransition`: a hook to start transitions, including a value to track the pending state.
-   `startTransition`: a method to start transitions when the hook cannot be used.

Transitions will opt in to [[20220912123929-concurrent-react|concurrent rendering]], which allows the update to be interrupted.

[[react]]