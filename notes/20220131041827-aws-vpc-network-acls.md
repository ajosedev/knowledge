# AWS Network ACLs

Network ACLs are your first line of defense.

VPCs automatically comes with a default network ACL, which allows all outbound and inbound traffic by default.
Custom network ACLs will deny all traffic by default.

Each subnet must be associated with a network ACL, whether that by the default or a custom ACL.
One ACL can have many subnets, but one subnet can only have one ACL.

You can block IP addresses with network ACLs, not security groups.

Network ACLs have separate inbound and outbound rules, with each rule allowing or denying traffic.

Each rule has its own number, corresponding to its evaluation priority (lowest numbers first).
Best practice is to use increments of 100.

Unlike security groups, ACLs are stateless. Responses to allowed inbound traffic are subject to the rules of outbound traffic (and vice versa).

[[aws]]
[[awsnetworking]]