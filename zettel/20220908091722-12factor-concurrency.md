# 12 Factor: 8. Concurrency
**Scale out via the process model**

Any computer program, once run, is represented by one or more processes. For example, PHP processes run as child processes of Apache.

In the twelve-factor app, processes are a first class citizen. Processes in the twelve-factor app take strong cues from the unix process model for running service daemons. Using this model, the developer can architect their app to handle diverse workloads by assigning each type of work to a process type.

The process model truly shines when it comes time to scale out. The share-nothing, horizontally partitionable nature of twelve-factor app processes means that adding more concurrency is a simple and reliable operation.

[[12factor]]
[[architecture]]
[[infrastructure]]
[[ops]]