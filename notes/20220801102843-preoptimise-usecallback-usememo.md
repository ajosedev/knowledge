# Don't pre-optimise useMemo or useCallback

Both `useMemo` and `useCallback` add their own overhead. If your original function is quick enough, the overhead from these two hooks may be greater than the cost of simply always running the function as normal.

Don't blindly optimise, measure the performance before and after with something like the React profiler, `console.time`, etc.

[[20210224103907-react-before-memo]]

[[performance]]
[[react]]
[[reacthooks]]