# useReducer vs useState

`useState` makes sense as the default tool for state management. However `useReducer` comes in handy in a couple key scenarios. Here's some criteria to help decide:
- Does the next state often depend upon the previous state?
- Is there more than one state to manage?
	- Are there situations where we change multiple states as the result of one event?
	- Are these states linked together?
- Are events handled differently depending on the current state?
- Do I need to use the [[20210816103245-state-reducer-pattern]]?kkkk

[[react]]