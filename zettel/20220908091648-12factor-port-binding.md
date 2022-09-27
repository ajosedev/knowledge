# 12 Factor: 7. Port binding
**Export services via port binding**

Web apps are sometimes executed inside a webserver container.

The twelve-factor app is completely self-contained and does not rely on runtime injection of a webserver into the execution environment to create a web-facing service. The web app exports HTTP as a service by binding to a port, and listening to requests coming in on that port.

[[12factor]]
[[architecture]]
[[infrastructure]]
[[networking]]
[[ops]]