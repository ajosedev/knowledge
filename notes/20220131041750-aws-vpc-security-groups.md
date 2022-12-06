# AWS VPC Security Groups

Security Groups are your last line of defense in a VPC. They are essentially virtual firewalls with everything blocked by default.

When troubleshooting internet connectivity issues, in order check:
1. Route tables
2. Network ACLs
3. Security groups

Security groups are stateful - if you send a request from your instance, the response traffic for that request is allowed to flow in regardless of inbound security group rules.

Responses to allowed inbound traffic are allowed to flow out, regardless of outbound rules.

However, Network ACLs are stateless [[20220131041827-aws-vpc-network-acls]]

[[aws]]
[[awsnetworking]]