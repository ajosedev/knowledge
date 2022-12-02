# Blue Green Deployments

Blue-green deployments rely on two near-identical production environments. One of them is live, with the other idle.

Whenever a new release is created, it's deployed on the previously idle environment. Then, traffic is cut over through some means, such as a load balancer or router. Now, the previously live environment becomes the idle one.
This strategy is used for every deploy, alternating between blue and green being the live server.

This provides a really quick way to roll back to a working production as needed.
If necessary, the traffic can pushed over gradually and be automatically monitored for errors.

[[20221117105511-canary-release]]

[[architecture]]
[[deployment]]