# AWS Transit Gateway

AWS Transit Gateway connects VPCs and on-premises networks through a central hub. This simplifies your network and puts an end to complex peering relationships. It acts as a cloud router - each new connection is only made once.

Rather than having to use [[20220131042020-aws-vpc-peering|VPC Peering]] which is difficult to scale, we can connect everything to the Transit Gateway using a hub-and-spoke model.

It works on a regional basis but you can have it across multiple regions and multiple AWS accounts using RAM (Resource Access Manager).

[[aws]]
[[awsnetworking]]