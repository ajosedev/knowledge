# EC2 Security groups

Security groups are virtual firewalls for your EC2 instance.
By default, everything is blocked. Allowing `0.0.0.0/0` lets everything in. In a production environment you wouldn't open up all ports as it opens up public SSH, RDP, etc.

Changes to security groups take effect immediately.

You can have any number of EC2 instances within a security group, and multiple security groups can be attached to EC2 instances.

All inbound traffic is blocked by default, and all outbound traffic is allowed.

[[aws]]
[[awsec2]]