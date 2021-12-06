# Throttle vs Debounce

**Throttling** enforces a maximum interval of how often a function can be executed. e.g. if a function is called every 1ms, it can be throttled to only execute at most every 100ms.

**Debouncing** enforces that a function will not be executed until a certain amount of time has passed without it being called. e.g. if a function is called every 1ms, execute it only after 100ms have passed with it being called.

Both reduce the total amount of calls, but the former will be executed even when constantly called, while the later 'groups' calls to execute when there's downtime.

You can also debounce on the leading edge, i.e. execute on the first call, and _then_ wait for a delay.

[[concepts]]
[[js]]