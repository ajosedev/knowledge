# Infrastructure as Code

aka IAC

> Infrastructure as code is the approach to defining computing and network infrastructure through source code that can then be treated just like any software system

To create the infrastructure, IaC code is processed by a system that turns their definitions into commands that are issued to the target platform, such as [[20220926121512-aws-cloudformation|CloudFormation]].

This has many benefits, including:
- Increasing transparency and visibility
- Keep things reproducible
- Automate common tasks
- Self-documentation
- Versioning, diffing, etc.
- Safer changes

This avoids manual processes, sometimes referred to as 'click ops'.

When using IaC, ideally the entire infrastructure is using it. Try to avoid having in between sections that require click ops as it's often confusing how to glue the pieces together. Similarly, try not to alter live infrastructure manually. Instead, modify the underlying IaC code.

[[architecture]]
[[concepts]]
[[engineering]]
[[infrastructure]]