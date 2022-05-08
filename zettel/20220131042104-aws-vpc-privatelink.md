# AWS PrivateLink

To open our applications up to other VPCs we can open it up to the internet:
- Everything in the public subnet becomes public
- A lot more to manage

Or use VPC peering [[20220131042020-aws-vpc-peering]]:
- Create and manage many different peering relationships
- The whole network will be accessible, not good if multiple applications in the VPC.

PrivateLink is the best way to expose a serive VPC to many many customer VPCs.
It doesn't require VPC peering, no route tables, NAT gateways, etc.
It does require a Network Load Balancer on the service VPC and an Elastic Network Interface (ENI) on the customer VPC.

[[aws]]
[[awsnetworking]]