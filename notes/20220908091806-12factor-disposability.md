# 12 Factor: 9. Disposability
**Maximize robustness with fast startup and graceful shutdown**

The twelve-factor app’s processes are disposable, meaning they can be started or stopped at a moment’s notice. This facilitates fast elastic scaling, rapid deployment of code or config changes, and robustness of production deploys.

Processes should strive to minimize startup time. Short startup allows for more agility when releasing and scaling.

Process should shut down gracefully when they receive a `SIGTERM` signal. When processes are shutdown, they should finish (or otherwise handle) current requests, before terminating. Processes should also be robust against sudden death, in the case of a failure in the underlying hardware or other reasons.

[[12factor]]
[[architecture]]
[[infrastructure]]
[[ops]]