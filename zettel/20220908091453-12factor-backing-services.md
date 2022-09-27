# 12 Factor: 4. Backing services
**Treat backing services as attached resources**

A backing service is any service the app consumes over the network as part of its normal operation, e.g. datastores, messaging systems, caching systems. These are locally-managed services. There's also third-party provided services, such as SMTP services, metrics-gathering services, API services, etc.
Each distinct backing service is a resource.

The code for a twelve-factor app makes no distinction between local and third party services. Both are attached resources, attached via config credentials.

This means a deploy can switch between a local and third-party service without changing the app code. This also allows you to switch from one production database to another, without any code changes.

[[12factor]]
[[architecture]]
[[infrastructure]]
[[ops]]