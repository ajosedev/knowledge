# AWS VPC Endpoints

A VPC endpoint enables you to privately connect your VPC to supported AWS services without requiring an internet gateway, NAT device, etc. This communication doesn't leave the Amazon network, so instances don't need a public IP address.

Endpoints are virtual devices.
They are horizontally scaled, redundant, and highly available VPC components that allow communicaiton between instances in your VPC and services without imposing availability risks or bandwidth constraints on your network traffic.

There are two different types of endpoints:
- Interface endpoints - an elastic network interface with a private IP address. Large amount of AWS service support
- Gateway endpoints - similar to NAT gateways, a virtual device you provision. Supports S3 and DynamoDB

[[aws]]
[[awsnetworking]]