# EC2 Placement groups

There are three different types of placement groups:

**Cluster Placement Groups**
Grouping of instances within a single AZ [[20211122101816-aws-global-infrastructure]]
Low network latency, high network throughput.
Only works for certain types of instances, and AWS recommends having homogenous instances within the group.

**Spread Placement Groups**
Instances that are each placed on distinct underlying hardware.
Recommended for applications that have a small number of *individual* critical instances that should be kept separate from each other.
You can't merge placement groups, but you can move an existing instance into a placement group.

**Partition Placement Groups**
Each partition placement group has its own set of racks. Each rack has its own network and power source.
Allows you to isolate the impact of hardware failure.
Used for *multiple* instances.

[[aws]]
[[awsec2]]