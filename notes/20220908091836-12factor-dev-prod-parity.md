# 12 Factor: 10. Dev/prod parity
**Keep development, staging, and production as similar as possible**

There are gaps between development and production. Time, personnel, and tooling.

The twelve-factor app is designed for continuous deployment by keeping the gap between development and production small.

Backing services, such as the app’s database, queueing system, or cache, is one area where dev/prod parity is important. Using a lightweight backing service in local and a more robust service in production is tempting, but should be avoided. Even when adapters theoretically abstract away the differences. These differences can manifest in strange ways, leading to 'production-only' errors that detract away from continuous deployment.

Adapters are still useful as they keep things [[20200307101703-easy-to-change]]. However all deploys should still be using the same type and version of the backing services.

[[12factor]]
[[architecture]]
[[environment]]
[[infrastructure]]
[[ops]]