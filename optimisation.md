# Optimisation

- Don't pre-optimise (duh)

- Don't optimise without profiling. Doing something innocuous such as using a `useCallback` adds initialising a new array, calling another function, etc.
