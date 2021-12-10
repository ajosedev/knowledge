# EC2 Spot instances

Allows you to take unused EC2 capacity for massive discounts (up to 90%). Using a **spot request** with a maximum price, instances are launched when there's availability for a cost under your maximum price.

Useful for stateless, fault-tolerant, or flexible applications, e.g. big data, CI/CD, test workloads, high-performance computing.
Bad for databases, critical jobs, and persistent workloads.

Hourly spot price varies depending on capacity and region. If the spot price goes above your maximum spot price, you have 2 minutes to stop or terminate your instances.

You may also use a **spot block** to stop your spot instances from being terminated even if the spot price is above your maximum. The length is for 1-6 hours.

If needing to cancel a spot instance under a persistent spot request, you need to cancel the request first to avoid a constant loop as AWS will re-launch.

A **spot fleet** is a collection of spot instances and (optionally) on-demand instances. Spot fleets will stop launching instances once you reach your price threshold or capacity desire.

You can have different launch pools for things like EC2 instance type, AZ, etc. 

[[aws]]
[[awsec2]]