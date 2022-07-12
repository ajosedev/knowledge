# AWS Certified Solutions Architect - Associate (SAA-C02)
#todo 

Author: A Cloud Guru

https://learn.acloud.guru/course/certified-solutions-architect-associate/dashboard
https://d1.awsstatic.com/training-and-certification/docs-sa-assoc/AWS-Certified-Solutions-Architect-Associate_Exam-Guide.pdf
https://d1.awsstatic.com/training-and-certification/docs-sa-assoc/AWS-Certified-Solutions-Architect-Associate_Sample-Questions.pdf
https://explore.skillbuilder.aws/learn/course/internal/view/elearning/11348/exam-prep-aws-certified-solutions-architect-associate-get-certified


**22/11/21**

Exam at the end, featuring single value multiple choice (1/4) and multiple value multiple choice (2/5).
Pass mark is 720/100
65 questions, 130 minutes

**28/06/22**
Note that soon a new version (SAA-C03) of the exam will be available - August 30, 2022.
https://aws.amazon.com/certification/coming-soon/

---

## Fundamentals

AWS Global Infrastructure
24 **regions** - locations, 77 **availability zones** ('AZ') - data center/server location
An AZ may be several data centers, but if in close proximity they are still a single AZ
Each region has 2 or more availability zones

**Edge locations** are endpoints for AWS that are used for caching.
Typically consists of Cloudfront (CDN)
Many more edge locations than regions, currently 200+

Exam: Containers, Application Integration, AWS Cost Management, Security Identity & Compliance, Analytics, Management & Governance, Migration & Transfer, Network & Content Delivery, Compute, Storage, Databases

[[20211122101816-aws-global-infrastructure]]

---

The shared responsibility model
Customer: Security **IN** the cloud - customer data, OS, IAM, etc.
AWS: Security **OF** the cloud - physical, storage, regions, networking, etc.

Rule of thumb: if you can do it in the AWS management console, you are probably responsible for it.

[[20211122103119-aws-shared-responsibility-model]]

---

Some different sections:
**Compute** is compute power, something that can crunch the data. EC2, Lambda, Elastic Beanstalk
**Storage** is file storage - S3, EBS (Elastic block store), EFS (Elastic file service), FSx, Storage Gateway
**Databases** is data storage - RDS (Relational database service), DynamoDB, Redshift
**Networking** is how things talk to one another, and where they 'live' - VPCs (virtual data centers in the cloud), Direct Connect, Route 53, API Gateway, AWS Global Accelerator

---

Well architected framework
5 pillars:
Operational excellence - running and monitoring systems to deliver business value
Security - protecting information and systems
Reliability - performs intended function corerctly and consistently
Performance efficiency - using computing resources efficiently
Cost optimisation - avoiding unnecessary costs

There's a whitepaper on this, read after the course but before the exam

[[20211122103805-aws-well-architected-framework]]

---

## IAM

**IAM** - Identity Access Management
Allows you to manage users and their level of access to the AWS console
Create users and grant permissions, groups, roles, etc.

The **root account** is the email address that signed up for AWS. It has full admin access, so it needs to be secured. Ideally the root account is never used, so secure the root account by:
- Enable MFA
- Create an admin group for admins, with appropriate permissions
- Create user accounts for your admins
- Add your users to the admin group
- Use these user accounts over the root account

---

IAM permissions are controlled with **Policy documents**, written in JSON.
Policy documents can be assigned to groups, users, and roles.
Best practice is to not apply it to a user directly, rather through a group.
IAM is region-agnostic.
Amazon offer many managed policies, which can be identified by their icon.

---

IAM bulding blocks:
Users - 1 user = 1 physical person
Groups - functions such as admin, developer, finance, etc.
Roles - allows 1 part of aws to access another part of aws
**Users should inherit permissions from groups**
Creating a user and not assigning to any groups or tags will create a user without any permissions at all.
Can set up identitiy providers like SAML or OpenID Connect to help manage user's passwords. IAM federation = combine existing user account with AWS, using stuff like Window's Active Directory
Access key ID and secret access key != username/passwords. They're used for programmatic access. They can only be viewed once.
Best practice: set up password rotations

Follow [[20210415100848-principle-of-least-privilege]]

[[20211122011016-aws-iam-basics]]

---

Each resource inside of AWS has an Amazon Resource Name (ARN) which uniquely identifies it 

---

Inline policies are applied to one user or one group. Often used to apply permissions in one-off situations.

---

In policies, an explicit 'deny' will always override any allow. By default, all permissions are implicitly denied until you explicitly grant those permissions.

---

## S3

What is S3?
Object storage, scalable, and simple
Manages data as objects rather than in file systems or data blocks. Can really support any data type, but not OS or DB storage.
Unlimited storage, max file size of 5TB.
Store files in **buckets**, similar to folders - universal namespace so each bucket name has to be globally unique.
When you upload a file, you'll receive a HTTP 200 if successful
Data is spread across multiple devices and facilities to ensure availability and durability.
Designed for frequent access, and supports most workloads.
Secure your data: server-side encryption, access control lists, bucket policies
Strong read-after-write consistency
S3 object tips: key, value, version ID, metadata

[[20211122033810-aws-s3-basics]]

---

Object ACLs - individual object level
Bucket policies - bucket-wide
Buckets are regional, even though the AWS console view is global
When blocking all public access at a bucket level (default), you can't allow a single object to be public.

---

Hosting static sites on S3
Dynamic websites, such as those that require database connections cannot be hosted on S3.
S3 scales automatically
Make the entire bucket public with a bucket policy, and you're pretty much done

---

Versioning in S3
Once enabled, can only be suspended
Can be integrated with lifecycle rules
Supports MFA to help stop deletions
Bucket policies do not apply to all versions - e.g. older versions may not be public
Deleting an object will create a 'delete marker', with all the versions underneath it. Deleting the delete marker will restore the older version.

---

S3 storage classes
Always 11 9's durability, and availability ranges from 99.5-99.99%.
Generally you can pay less to store data you access less frequently. Retrieval fee applies for any non-standard tiers.

Standard: 99.99% availability. Designed for frequent access. Suitable for most workloads. Highest cost. Data stored redundantly across different AZs
Standard-Infrequent Access: Rapid access, good for long term infrequently accessed critical data. 99.9% availability.
One zone-Infrequent access: Data stored redundantly within a single AZ. Costs less than  Standard-IA. Great for long-lived, infrequently access, non-critical data. 99.5% availability

Glacier is cheap storage, used for very infrequently access data - pay for access. Think archiving. 99.99% availability.
Glacier: long-term data archiving, retrieval times 1min - 12hrs
Glacier deep archive: rarely access data, with a default retrieval time of 12hrs

[[20211122033414-aws-s3-storage-classes]]

---

S3 intelligent-tiering
Uses ML to automatically move your data to the most cost-effective tier based on how frequently you access each object.
Monthly fee.

---

Lifecycle management automates moving objects between different storage tiers for cost effectiveness.
Can be used with versioning.
Lifecycle rules have scopes - can apply to different objects using filters, or apply to all objects in the bucket.

[[20211122034529-aws-s3-lifecycle-management]]

---

You can use S3 Object Lock to store object using a write once, read many (WORM) model. It can help prevent objects from being deleted or modified for a fixed/indefinite amount of time (its retention period). Useful for regulatory requirements.

In governance mode, users can't overwrite or delete an object version or alter its lock settings unless they have special permissions.

In compliance mode, a protected object can't be overwritten or deleted by any user, including the root user.

A legal hold prevents an object version from being overwritten or deleted, similar to a retention period. However it's indefinite until it is removed.

Glacier Vault Lock allows you to easily deploy and enforce complicance controls in Glacier, such as the WORM model.

[[20211122040610-aws-s3-object-lock]]

---

S3 encryption
Encryption in transit - SSL/HTTPS
Encryption at rest: server-side encryption - SSE-S3, SSE-KMS, SSE-C
Encryption at rest: client-side encryption - encrypt before uploading

Enforcing server-side encryption
- Console: click ops
- Bucket policy: can enforce encryption with a bucket policy
`x-amz-server-side-encryption` request header used, with a value depending on which SSE you're using
You can create a bucket policy that denise any S3 PUT request that doesn't include that parameter in the request header.

---

S3 prefixes are just the folders in your bucket. The more prefixes you have, the more performance you can achieve. The max requests per second are per prefix, so ideally you spread reads across different prefixes.
SSE-KMS has its own limits.

Multipart uploads are recommended for files over 100mb, and required for files over 5gb. Essentially parallel uploads.
The same exists for downloads, split them up and then if there's a failure it's only for a specific byte range.

---

S3 Replication

A way of replicating objects from one bucket to another. Needs versioning on both the source/destination buckets.

Objects in an existing bucket are not replicated automatically. Additionally, delete markers are not replicated by default.

[[20211206011713-aws-s3-replication]]

---

## EC2

EC2 Overview - Elastic Compute Cloud

Secure, resizable compute capacity in the cloud. Like a VM but hosted in AWS. Designed to make web-scale cloud computing easier for developers.
Managed by you, you have complete control. Grow and shrink as you need.
Pay only what you use.

Complete game changer when it was introduced, as you no longer had to manage on-prem hardware that needed to future plan for scaling.

Pricing tiers:
On-demand - pay by the hour/second. Flexible, useful for short-term and testing the water.

Reserved - reserved capacity for 1-3 years, with a big discount. Good for predictable usage where you can afford to pay up front. Can scale your reserved instances on a schedule. Operate at a regional level.

Spot - purchase unused capacity at a discount, prices fluctuate with supply and demand. You dictate the price and gain spot instances when that instances at the price is available. Good for apps with flexible start/end times, and those with an urgent need for large amount of additional computing capacity.

Dedicated - a physical ec2 server for your use, the most expensive. Helpful for regulatory compliance, licensing compliance. Can be purchased on-demand (hourly), or reserved (more savings).

AWS pricing calculator helpful for saving the most money.

[[20211206023810-aws-ec2-basics]]

---

An AMI (amazon managed instance) is an image of the entire virtual machine, including one or more EBS snapshots, launch permissions, and a mapping that specifies volumes to attach. When launching an EC2 instance, you must select an AMI to choose its configuration.

It is possible to create your own AMI using an existing AMI as a base.

[[20211206023827-aws-ec2-ami]]

---

AWS command line

Can also use 'EC2 instance connect'.
Useful when SSHing into EC2 instances. Can ssh using the IP, with `-i <key.pem>` for the permission key files. The `aws` command line is pre-installed on EC2 instances.

Use IAM public/secret access keys in combination with `aws <service> configure` to verify yourself. Then can use `aws` commands to manage files etc, such as `aws s3 ls`.

Remember [[20210415100848-principle-of-least-privilege]] and to use groups.


TODO

---

IAM roles

An identity you can create in IAM that has specific permissions. It's an AWS identity that is intended to be assumable by anyone (or anything) who needs it, rather than assigning it to a specific person.

Roles are temporary, when you assume a role it provides you with temporary credentials for your session.

Policies control a role's permission, and when a policy attached to a role is updated it will take immediate effect.

Roles are the preferred option from a security perspective. They allow you to avoid hard-coding your credentials (access key IDs/secret access keys).

[[20211206015943-aws-iam-roles]]

---

EC2 Security groups

Security groups are virtual firewalls for your EC2 instance.
By default, everything is blocked. Allowing `0.0.0.0/0` lets everything in. In a production environment you wouldn't open up all ports as it opens up public SSH, RDP, etc.

Changes to security groups take effect immediately.

You can have any number of EC2 instances within a security group, and multiple security groups can be attached to EC2 instances.

All inbound traffic is blocked by default, and all outbound traffic is allowed.

[[20211206024031-aws-ec2-security-groups]]

EC2 bootstrap scripts

This is a script that runs when the instance first runs. This obviously adds boot time, but is useful for automating installation of applications.

You can add a bootstrap script when launching an EC2 instance.

[[20211206145935-aws-ec2-bootstrap-scripts]]

---

EC2 metadata

Simply data about your EC2 instance - IP addresses, hostname, security groups, etc. User data is simply bootstrap scripts.

To retrieve metadata, you can use `curl` on a EC2 IP. Since bootstrap scripts run are just bash scripts, you can also use these to retrieve metadata.

---

Networking with EC2

Three different virtual networking cards

**ENI (Elastic Network Interface)** - basic, day-to day
Private & public IPv4 Address
Helpful to create a separate management network, or logging network, etc.
Low-budget, high-availability solution
Can use multiple ENIs for each network.

**EN (Enhanced Networking)** - single root I/O virtualisation for high perf
10Gbps - 100Gbps
Higher bandwidth, higher packets per second
Can be used with ENA (newer, preferred) or VF (older)

**EFA (Elastic Fabric Adapter)** - high performance computing and ML applications
Lower and more consistent latency than TCP
Can use OS-bypass, which makes it faster by bypassing the OS kernel and lowering latency.

[[20211206170231-aws-ec2-networking]]

---

EC2 Placement groups

Three different types:

**Cluster Placement Groups**
Grouping of instances within a single AZ [[20211122101816-aws-global-infrastructure]]
Low network latency, high network throughput.
Only works for certain types of instances, and recommended to have homogenous instances within the group.

**Spread Placement Groups**
Instances that are each placed on distinct underlying hardware.
Recommended for application that have a small number of *individual* critical instances that should be kept separate from each other.
You can't merge placement groups, but you can move an existing instance into a placement group.

**Partition Placement Groups**
Each partition placement group has its own set of racks. Each rack has its own network and power source.
Allows you to isolate the impact of hardware failure.
Used for *multiple* instances.

[[20211206170459-aws-ec2-placement-groups]]

---

Spot instances

Allow you to take unused EC2 capacity. Up to 90% discount.
Useful for stateless, fault-tolerant, or flexible applications. Some examples: big data, CI/CD, test workloads, high-performance computing. Bad for databases, critical jobs, and persistent workloads.

Hourly spot price varies depending on capacity and region. If the spot price goes above your maximum spot price, you have 2 minutes to stop or terminate your instances.

You may also use a **spot block** to stop your spot instances from being terminated even if the spot price is above your maximum. The length is for 1-6 hours.

If needing to cancel a spot instance under a persistent spot request, you need to cancel the request first to avoid a constant loop.

A **spot fleet** is a collection of spot instances and (optionally) on-demand instances. Spot fleets will stop launching instances once you reach your price threshold or capacity desire.

You can have different launch pools for things like EC2 instance type, AZ, etc. 

[[20211206170859-aws-ec2-spot-instances]]

---

## EBS & EFS

EBS = Elastic Block Storage

Storage volumes you can attach to your EC2 instances. Basically a virtual hard disk: useful for file systems, databases, OS, data, etc.

Designs for mission critical data. Highly available, and scalable.

Different types of EBS volumes:
	General Purpose SSD (gp2) - a balance of price and performance. Good for boot volumes or development/test apps that are not latency sensitive
	General Purpose SSD (gp3) - high performance at a low cost: mysql, virtual desktops, etc.
	Provisioned IOPS SSD (io1) - high performance and most expensive. Use if you need more than 16000 IOPS: large databases and latency sensitive workloads
	Provisioned IOPS SSD (io2) - A straight upgrade to io1
	Throughput Otimised HDD (st1) - Low-cost HDD volume, cannot be a boot volume
	Cold HDD (sc1) - Lowest cost option, good for colder data
	
[[20211220025610-aws-ebs]]
	
---

IOPS vs throughput

IOPS:
- **Number of read and write operations per second**
- Important metric for quick transactions, low-latency apps, transactional workloads

Throughput:
- **Measures the number of bits read or written per second (MB/s)**
- Important metric for large datasets, complex queries

Think of throughput when thinking of big data and ETL

[[20211220025739-iops-vs-throughput]]
	
---

Volumes are virtual hard disk instances. Need a minimum of 1 volume per EC2 instance, this is called the *root device volume*.

EBS volumes will always be in the same AZ as EC2, this has obvious benefits such as latency.

You can resize the volumes on the size, i.e. the instance does not to be stopped. However you will need to extend the filesystem in the OS so the OS can see the resized volume.

You can also switch volume types on the fly.

Volumes exist on EBS, snapshots exist on S3.

[[20211220025859-aws-ebs-volumes]]

---

Snapshots exist on S3 and act as a point in time copy of the virtual disk/volume. They are incremental, so they only track the data that has been changed since the last snapshot. Thus, the first snapshot will be the longest/biggest.

Snapshots only capture data written to your EBS volume, which may exclude cached data (e.g. in RAM or in the application). Best practice for consistency is to stop the instance and take a snap.

If you take a snapshot of an encrypted EBS volume, the snapshot will be encrypted automatically.

You can share snapshots, but only in the region in which they were created. To share to other regions, you will need to copy (i.e. not share) the snapshot to that region first.

[[20211220030108-aws-ec2-snapshots]]

---

EBS encryption

Uses AES-256 through AWS Key Management Service (AWS KMS) custom master keys (CMK).

When encrypting, data at rest and in flight is encrypted. Future snapshots and volumes created from the snapshot are also then encrypted.

Has a minimal impact of latency.

Copying an unencrypted snapshot allows encryption.

To encrypt and unencrypted volume:
1. Create a snapshot
2. Create a copy of the snapshot and select the encrypt option
3. Create an [[20211206023827-aws-ec2-ami|AMI]] from the encrypted snapshot
4. Use that AMI to launch new encrypted instances

[[20211220030243-aws-ebs-encryption]]

---

EC2 Hibernation

If we stop an EC2 instance, the data is kept on the disk (with EBS) and will remain on the disk until the EC2 instance is re-started. If the instance is terminated, by default the root device volume will also be terminated.

When you hibernate an EC2 instance, hibernation saves the contents from RAM to EBS. When you start your instance out of hibernation, the root volume is restored to its previous state and the RAM is restored.

Hibernation makes the instance boot much faster as RAM is preserved. This skips the OS, bootstrap, and applications startup from taking as much time.

There are certain conditions that need to be met for hibernation, such as a MAX ram size, instance family, total time, etc.

[[20211220030328-aws-ec2-hibernation]]

---

EFS overview

EFS = Elastic File System

Managed NFS (network file system) that can be mounted on **many** EC2 instances, even across AZs.
Highlighy available and scalable, but it is expensive.

Useful for CMS, web servers, etc. Linux only AMIs, and uses NFSv4.

Supports encryption at rest using KMS.

Scales automatically, pay for the storage you use.

Really high performance, and can be controlled: general purpose or max I/O.

Has different storage tiers, including lifecycle management support. Pick between standard and infrequently accessed (IA).

[[20211220030433-aws-efs]]

---

FSx for Windows

Pretty much EFS (TODO LINK) for Windows - built on Windows server to you can easily move Windows-based applications.

This means it's a managed Windows Server using Windows Server Message Block (SMB). Supports AD users, security policies, etc.

There's also FSx for Lustre. A managed file system useful for high intensity workloads, like ML, AI, HPC, etc. It can also store data directly on S3.

[[20211220030623-aws-fsx]]

---

Amazon Machine Images (AMIs)

TODO - update old doc?

Provides the info required to launch an instance - it acts as a 'template'. You must specify an AMI when you launch an instance.

5 things you can base your AMI on:
- Region
- OS
- Architecture (32/64)
- Launch permissions
- Root device volume

AMIs are backed by either EBS or Instance store.

Instance store volumes are sometimes called ephemeral storage. They cannot be stopped, and if they underlying host fails, you will lose your data. If you delete hte instance, you will store the instance store volume.

EBS volumes can be stopped. By default they will be deleted on instance termination, but can be kept.

Both types can be rebooted.

[[20211206023827-aws-ec2-ami]]

---

AWS Backup

Allows you to consolidate your backups across multiple AWS services: EC2, EBS, EFS, etc. It can include other technologies, such as database storage like DynamoDB.

It gives you centralised control across all AWS services, in multiple AWS accounts across the entire AWS organisation.

Benefits:
- Central management
- Automation
- Improved compliance

[[20211220030914-aws-backup]]

---

## Databases

Relational Database Service (RDS)

Different relational database engines available (e.g. MySQL, PostgreSQL, SQL Server, etc), including Amazon's own Aurora.

RDS is optionally multi-AZ, which is only used for disaster recovery. Faults on the primary mean the secondary automatically becomes the primary. Note that this doesn't increase performance, it's for disaster recovery only. Performance can be increased with read replicas (TODO - link).

AWS handles the replication for you, so any writes happen on both.

Automated backups are possible

RDS are generally used for online transaction processing (OLTP), not online analytical processing (OLAP)
OLTP - processes data from transactions in real time. Large numbers of small transactions
OLAP - complex queries to analyse historical data. Large amounts of data.

[[20220131032106-aws-rds]]

---

Read Replicas

These are used to increase (read) performance with RDS. Read replicas are a read-only copy of your primary database. That way, your queries don't add any extra load to your primary DB.

Read replicas *can* be in a different AZ or region, but it's not required.

Each read replica has its own DNS endpoint.

Replicas can be promoted to their own database, however this breaks the replication.

Automated backups must be enabled to deploy a read replica.

[[20220131032436-aws-rds-read-replicas]]

---

Amazon Aurora

Amazon's own RDS engine. MySQL and PostgreSQL compatible.

5x better performance than MySQL and 3x better than PostgreSQL, for a much lower price point.

Start with 10gb, scales in 10gb increments up to 128tb. Compute resources can scale massively too.

2 copies of your data are contained in each AZ, with a nimum of 3 AZs (for a total of 6 copeis).

3 different types of replicas available
- 15 read replicas with Aurora
- 5 read replicas with Aurora MySQL
- 5 read replicas with Aurora PostgreSQL

Automated backups are always enabled.
You can also take snapshots, which can be shared with AWS accounts.

*Aurora Serverless* also exists, that automatically starts up, shuts down, and scales up/down depending on your application's needs. Good for infrequent or unpredictable workloads.

[[20220131032535-aws-aurora]]

---

DynamoDB

Amazon's own NoSQL database.

Fully managed, and supports both document and key/value data models.

Stored on SSD storage, spread across 3 geoegraphically distinct data centers.

Eventually consistent reads (default), with ability to opt-in to strongly consistent reads. The former means that consistency across all copies of data is usually reached within a second (best read performance), the latter returns a result that reflects all writes prior to the read.

DynamoDB Accelerator (DAX)
	Fully managed highly availble in-memory cache
	10x performance improvement
	Reduces request time from millisecond to microseconds
	Can act as a middleware cache, so you don't have to manage hitting a cache vs dynamoDB.
	
On-demand capacity
	Pay-per-request pricing
	Balance cost and performance
	Pay more per request than with provisioned capacity
	
Security
	Encryption at rest using KMS

[[20220131032739-aws-dynamodb]]

---

When do we use DynamoDB transactions?

Taps into ACID (Atomic, Consistnet, Isolated, Durable)
DynamoDB transactions provide ACID across 1 or more tables within a single AWS account and region.

Transactions are 'all or nothing', either everything works or nothing does.
Use cases: financial transactions, fulfilling orders, etc.

3 options for reads: eventual consistency, strong consistency, and transactional
2 options for writes: standard and transactional

[[20220131033235-aws-dynamodb-transactions]]

---

Saving your data with DynamoDB Backups

On-demand backup and restore
Full backups at any time, with zero impact on performance/availability

Point-in-Time Recovery (PITR)
Protects against accidental writes or deletes
Incremental backups
Not enabled by default

---

Taking Your Data Global with DynamoDB Streams and Global Tables

*Streams* are time-ordered sequences of item-level changes in a table.
Streams contain data about inserts, updates, and deletes.
Stored for 24 hours.

*Global tables* are managed multi-master, multi-region replication.
Based on DynamoDB streams, this is great for globally distributed applications. Good for multi-region redundancy or high availability.

[[20220131033407-aws-dynamodb-streams]]

---

## Virtual Private Cloud (VPC) Networking

VPC Overview

Think of a VPC as a virtual data center in the cloud.
It's a logically isolated part of AWS Cloud where you can define your own network.
Complete control of virtual network, including your own IP address range, subnets, route tables, and network gateways.

It's a fully customisable network. Typically you have a 3tier network:
- Web - public-facing subnet
- Application - private subnet. Can only speak to web tier and database tier
- Database - private subnet. Can only speak to application tier

When you create a VPC, you need to choose a IP range (best practice: 10.0.0.0/x)
These IP ranges should change per subnet to avoid clashing.

1 subnet is always in 1 AZ

The basic flow from the internet is:
Internet Gateway -> Router -> Route Table -> Network ACL -> Subnet -> Security Group

![[VPC Example.png]]

[[20220131041418-aws-vpc]]

---

Demo: Provisioning a VPC - Part 1

Recommendation: Be able to create a VPC from memory before the exam.

Creating a VPC creates a route table and access control list (ACL) automatically.
It does not create any subnets automically.

Think of a subnet as a virtual firewall(?)
A public subnet is internet accessible, a private subnet is not.

Possible naming convention for subnets: `<CIDR Range> - <AZ>`

AWS reserves some IP addresses, 10.0.0.0-3, and 10.0.0.255

---

Demo: Provisioning a VPC - Part 2

A setting exists to auto assign IP addresses for a subnet. Useful for public subnets, this means that any EC2 instances that's put into said subnet will automatically get assigned a IP address.

Only one internet gateway per VPC

Every time you create a subnet it is automatically associated with the main route table. Because of this it's best practice to have a separate route table for any routes out to the internet, just in case something leaks.

---

Using NAT Gateways for Internet Access

Network address translation (NAT) can be used to enable instances in a private subnet to connect to the internet or other AWS services while preventing the internet from initiating a connection with those instances.

You provision the NAT Gateway in the public subnet (and thus the same AZ), allowing instances in the private subnet to access the internet (but only outwards).

NAT Gateways are redundant within the single AZ, not associated with security groups, and are automatically assigned an IP address.

You also have to alter your route table to route requests through the NAT Gateway.

Note that NAT Gateways have a maximum amount of bandwidth.

[[20220131041645-aws-nat-gateways]]

---

Protecting Your Resources with Security Groups

Security Groups are your last line of defense in a VPC. They are essentially virtual firewalls with everything blocked by default.

When troubleshooting internet connectivity issues, in order check:
1. Route tables
2. Network ACLs
3. Security groups

Security groups are stateful - if you send a request from your instance, the response traffic for that request is allowed to flow in regardless of inbound security group rules.

Responses to allowed inbound traffic are allowed to flow out, regardless of outbound rules.

Network ACLs are stateless. (TODO - link)

[[20220131041750-aws-vpc-security-groups]]

---

Controlling Subnet Traffic with Network ACLs

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

[[20220131041827-aws-vpc-network-acls]]

---

Private Communication using VPC Endpoints

A VPC endpoint enables you to privately connect your VPC to supported AWS services without requiring an internet gateway, NAT device, etc. This communication doesn't leave the Amazon network, so instances don't need a public IP address.

Endpoints are virtual devices.
They are horizontally scaled, redundant, and highly available VPC components that allow communicaiton between instances in your VPC and services without imposing availability risks or bandwidth constraints on your network traffic.

There are two different types of endpoints:
- Interface endpoints - an elastic network interface with a private IP address. Large amount of AWS service support
- Gateway endpoints - similar to NAT gateways, a virtual device you provision. Supports S3 and DynamoDB

[[20220131041919-aws-vpc-endpoints]]

---

Building Solutions across VPCs with Peering

Sometimes you may need to have several VPCs for different environments, and it may be necessary to connect these VPCs to each other.

VPC Peering allows you to connect 1 VPC to another via a direct network route using private IP addresses. These instances behave as if they were on the same private network.
You can also peer VPCs with other AWS accounts, and across regions.
Peering is in a hub-and-spoke configuration, and there's no transitive peering (i.e. peering A to C through B).

It's also possible to open your services in a VPC to another VPC by simply allowing access through the internet. TODO - privatelink link

Remember to check for overlapping CIDR ranges

[[20220131042020-aws-vpc-peering]]

---

Network Privacy with AWS PrivateLink

To open our applications up to other VPCs we can open it up to the internet:
- Everything in the public subnet becomes public
- A lot more to manage

Or use VPC peering:
- Create and manage many different peering relationships
- The whole network will be accessible, not good if multiple applications in the VPC.

PrivateLink is the best way to expose a serive VPC to many many customer VPCs.
It doesn't require VPC peering, no route tables, NAT gateways, etc.
It does require a Network Load Balancer on the service VPC and an Elastic Network Interface (ENI) on the customer VPC.

[[20220131042104-aws-vpc-privatelink]]

---

Securing Your Network with VPN CloudHub

If you have multiple sites, each with its own VPN connection, you can use AWS VPN CloudHub to connect those sites together.

Works on a hub-and-spoke model
Low cost and easy to manage
Operates over the public internet, but is encrypted

---

Connecting On-Premises with Direct Connect

AWS Direct Connect is a cloud service solution that makes it easy to establish a dedicated network connection from your premises to AWS.

In many cases, you can reduce your network costs, increase bandwidth throughput, and improve the network experience compared to internet-based connections.

Two different types of Direct Connect Connection
Dedicated Connection - A physical ethernet connection associated with a single customer
Hosted Connection - A physical ethernet connection through a AWS Direct Connect Partner, such as an ISP.

VPNs allow private communication but it still traverses the public internet. While secure, it can be painfully slow.

[[20220131042202-aws-direct-connect]]

---

Simplifying Networks with Transit Gateway

AWS Transit Gateway connects VPCs and on-premises networks through a central hub. This simplifies your network and puts an end to complex peering relationships. It acts as a cloud router - each new connection is only made once.

Rather than having to use VPC Peering which is difficult to scale, we can connect everything to the Transit Gateway using a hub-and-spoke model.

It works on a regional basis but you can have it across multiple regions and multiple AWS accounts using RAM (Resource Access Manager).

[[20220131042235-aws-vpc-transit-gateway]]

---

## Route 53

Route 53 Overview

DNS converts human-friendly domain names into an IP address.
We're running out of IPv4, _have_ to move to IPv6 soon.

SOA record - State of Authority, where your DNS starts
NS - name server records, where is the DNS info stored

Lookup google.com -> look at .com TLD for NS records -> NS records return a SOA

Some other DNS record types:
A record - translates domain into an IP address
TTL - time to live, length of the DNS record cache
CNAME - canonical name, used to resolve one domain name to another
Alias records - exists within AWS, map resource records to load balances, S3, etc. Similar to a CNAME

CNAME cant be used for naked domain names (zone apex record), Alias records can.
Given the choice, always choose an alias record over a CNAME.

---

Simple Routing Policy

Only one record with multiple IP addresses. If you specify multiple values in a record, Route 53 returns all values to the user in a random order.

Weighted Routing Policy

Allows you to split your traffic based on different weights assigned. e.g. set 10% of traffic to go to  `us-east-1`.

Once you've created a health check, you can set it on an individual record sets. If a record set fails a health check, that record will be removed from Route 53 until it passes.

Failover Routing Policy

Used when you want to create an active/passive set up. For example, having a primary site on one region and a secondary site in another.

Geolocation Routing Policy

Chooses where your traffic will be sent based on the geographic location of your users. Useful for things like localisation, regulatory requirements, etc. Not as useful as 'latency' for performance.

Latency Routing Policy

Routes traffic based on the lowest network latency for your end user. To use latency-based routing, you create a latency resource record set for the EC2 (or ELB) resource in each region that hosts your website, which Route 53 uses.

---

Using a Geoproximity Routing Policy

Route 53 Traffic Flow
You can build a routing system that uses a combination of: geographic location, latency, and availability, to route traffic.

Geoproximity Routing is Traffic Flow ony, and lets you route traffic to your resources based on the geographic location of your users. Optionally this can be a weigthed value, using a bias.

---

Using a Multivalue Answer Routing Policy

Configure Route 53 to return multiple values in response to DNS queries. This differents for other records, as it lets you check the health of each resource as well.
This is similar to simple roting, however it allows you to put health checks on each record set.

---

## ELB

ELB Overview

ELB - Elastic Load Balancer
Automatically distributes incoming application traffic across multiple targets. Can be done across multiple AZs.

Three different types of load balancers:
Application Load Balancer - Intelligent Load Balancer. Best suited for HTTP and HTTPS traffic. Operate at Layer 7 and are application-aware
Network Load Balancer - Performance Load Balancer. Operates at Layer 4, and are capable of handling millions of requests per second with low latency
Classic Load Balancer - Classic/Test/Dev Load Balancer. Used for HTTP/HTTPS applications and can use layer 7-specific features.

All load balancers can be configured with health checks. Failing health checks are `OutOfService`, successful are `InService`. Load balancers route only to the healthy instances.

---

Application Load Balancers

Application Layer - 7th layer of the OSI (Open Ssstems Interconnection) model. After the LB receives a request, it evaluates the listener rules in priority order. Can be used only on HTTP/HTTPs.

A **listener** checks for connection requests from clients, using the protocol and port you configure. You define **rules** that determine how the load balance routes requests to its registered targets.
Each rule has a priority, one or more actions, and one or more conditions.

Each **target group** routes requests to one or more registered targets, such as EC2 instances.

Path based routing allows you to load balance to a different target group depending on the path using 'path patterns'. For example, any URL with `images/` will load balance to different servers in a different AZ.

To use HTTPS, you must deploy at least one SSL/TLS certificate on your load balancer.

---

Extreme Performance with Network Load Balancers

Functions at Layer 4, and can handle millions of requests per second.
Attempts to open a TCP connection ti the selected target on the port specified in the listener configuration.

A listener checks for connection requests from clients. On a NLB, the listener forwards the request to the target group. There are no rules, unlike with ALBs.

Each target group requests to one or more registered targets, such as EC2 instances.

Most useful when extereme performance is required, helps maintain low latency.

---

Using Classic Load Balancers

The legacy load balancers. Used for HTTP/HTTPS applications, and can use Layer 7 specific features, such as `X-Forwarded`.

When traffic is sent from a load balancer, the server access logs contain the IP address of the proxy or load balancer only. To see the original IP address of the client, `X-Forwarded-For` is used.

Responds with a 504 if your application stops working.

---

Getting 'Stuck' with Sticky Sessions

Classic Load Balancers route each request independently to the registered EC@ instance with the smalles load.

Sticky sessions allow you to bind a user's session to a specific EC2 instance. It 'sticks' a user to an instance.

This can cause issues with scaling, such as when you remove a EC2 instance a user is tied to from a pool. To solve this, disable sticky sessions.

Sticky sessions also exist on ALBs, but the traffic will be ent at the target group level.

---

Leaving the Load Balancer with Deregistration Delay

aka 'Connection Draining' on Classic Load Balancers

Deregistration Delay allows Load Balancers to keep existing connections open if the EC2 instances are de-registered or become unhealthy. This delay can be disabled.

This enables the load balancer to complete in-flight requests made to instances that are de-registering or unhealthy.

---

## Monitoring

TODO

---

## High Availability and Scaling

Horizontal vs Vertical Scaling Overview

Vertical scaling is somewhat the 'older style'. Horizontal scaling is usually what we want now.

Vertical scaling is like building a taller skyscraper (EC2 instance). If it's not large enough you make it repeatedly taller, but that only works to a point before it gets too tall to increase. It does have a place, a `t2.micro` will never be a great prod database.
Horizontal scaling is having a town. We can keep adding new houses (EC2 instances) as much as we want.

Horizontal scaling increases our high availability, as we're building redundancy (assuming multi-AZ).

The 3 W's of Scaling
1. What do we scale?
2. Where do we scale?
3. When do we scale?

Best practice when scaling is to get ahead of the workload. Favour being predictive rather than reactive.
Also try to bake AMIs when possible, to reduce start up times.

---

What are Launch Templates and Launch Configurations?

A **launch template** specifies all the needed settings that go into building out an EC2 instance. It is a collection of settings you can configure to avoid click ops.

A launch template is a better version of a launch configuration. They support versioning, are used for more than autoscaling, are more granular, and are recommended by AWS.

Included in a launch template is:
- AMI
- EC2 instance size
- Security groups
- (Potentially) networking information - best practice is to dictate this in auto scaling groups to avoid conflicts(?)
- (Potentially) user data

---

Scaling EC2 Instances with Auto Scaling

An Auto Scaling group contains a collection of EC2 instances that are treated as a collective group for purposes of scaling and management. It's vital for creating a highly available application, especially when put across multiple AZs, and utilising load balancers.

Auto scaling steps:
- Define your launch template (TODO link) to use
- Pick your networking space and purchasing options. Can use mutli AZ for high availability
- ELB configuration. The auto scaling group will then be put behind this. The Auto Scaling group can be set to respect the load balancer health checks. Otherwise, standard EC2 health checks are used.
- Scaling policies. Minimum, maximum, and desired capacity
- Notifications (through SNS)

Note that 'desired capacity' means desired 'at this very second', meaning it's constantly changing.

You can use spot instances in auto scaling to reduce costs.

Note that Auto Scaling Groups are for EC2 only. Other services have other scaling means.

---

Diving Deeper into Auto Scaling Policies

EC2 instances take time to come up, they have a warmup period before a healthcheck starts, to avoid an endless loop of reconstruction.
However, taking them down is pretty instant.

There's also a cooldown that pauses Auto Scaling for a set amount of time.

All of these strategies aim to avoid thrashing - try to scale up quickly and scale down slowly.

Different types of scaling:
- Reactive scaling - measure once load happens and determine if you need more resources
- Scheduled scaling - if you have a predictiable workload
- Predictive scaling - ML algorithims to determine when you need to scale

There's merit to having an Auto Scaling policy with a maximum of 1. If you have a legacy app that can only have a single running version, this scaling policy ensures it stays up in if it ever goes down. This is a steady state group.

---

Scaling Relational Databases

Four types of scaling for a RBDMS
- Vertical scaling
- Scaling storage - can only scale up
- Read replicas - helpful for read-heavy workloads
- Aurora serverless

In terms of an AWS test, usually refactoring and changing to DynamoDB is a viable scaling choice.

---

Scaling Non-Relational Databases

AWS does all the heavy lifting to make scaling with DynamoDB easy.
Two models: provisioned and on-demand

Provisioned is for a generally predictable workload. Just set an upper and lower scaling bound. Cheaper than on-demand.
On-demand is better for a sporadic workload. Costs money per read and write, with AWS performing the scaling automatically.

---

## Decoupling workflows

TODO

---

##  Big Data

TODO

---

## Serverless Architecture

Serverless Overview

Over time we're rapidly progressed how we run servers:
- Physical data centers - managing hardware
- Virtualisation - focusing on running multiple computers inside of hardware
- The cloud - managing only virtual compute
- Serverless - focusing on code, leaving compute behind

Benefits of serverless:
- Ease of use. Only have to manage bringing our code
- Event based. Compute resources can be brought online in response to an event happening
- Billing model. Pay as you go, down to the length of the runtime

Two major services in AWS: Lambda and Fargate (TODO - link)

---

Computing with Lambda

Lambda is a serverless compute service that lets you run code without provisioning or managing the underlying servers. A function cannot run longer than 15mins.

They work off a trigger, that actually alerts your function to start. There's many many ways of triggering a lambda. This flexibility from triggers and actions lets you do anything with Lambda, even 'add features' to AWS.

You'll need to pick an available runtime (code environment) or bring your own.

If your Lambda function needs to make an WAS API call, you'll need to handle permissions by attaching a role.

Lambdas can run a 'networking ether', where you don't specify. It's possible to define the VPC, subnet, and security group if needed.

You can define the amount of available memory which controls both CPU and RAM. Pick the least amount of resources you need, as you pay for both memory and time running.


---

Container Overview

TODO - separate this out from AWS? 'Container basics'

A container is a standard unit of software that packages up code and all its dependencies. This is useful so the application runs quickly and reliably from one computing environment to another.

Very helpful for ensuring dev/prod parity.

Unlike a virtual machine, a container doesn't have a guest OS per VM.

Terminology:
Dockerfile - A list of instructions used to build an image
Image - Immutable file that contains code, libraries, dependencies, and config files needed to run an application
Registry - Stores imags for distribution
Container - A running copy of the image that has been created

---

Running Containers in EKS and ECS

Elastic Container Service (ECS) is a proprietary tool that helps manage containers at scale.
Containers are appropriate registered with load balancers as they come online.
Containers can have individual roles attached to them.

Kubernetes is the open source version of this, which can be used on-premises and in the cloud. AWS also has a version is called Elastic Kubernetes Services (EKS).

ECS is easy to set up and use. It's the simpler option, with the downside of being proprietary and thus not possible to use on-prem.
EKS is an AWS-managers version of Kubernetes. Best used when you're not all in on AWS.

ECS relies on a **task definition**. Effectively, it's all of the settings you need for a container to properly run.

Remember that both of these tools create EC2 instances per your task definition for you and the containers are placed inside of these. If you don't want to manage EC2 instances, consider Fargate.

---

Removing Servers with Fargate

Fargate is a serverless compute engine for containers that works with both ECS and EKS. It avoids having to use EC2 instances for the former two tools. It require use of ECS or EKS, so it's sort of a functionality of those services rather than its own.

When using Fargate, you must define the memory and CPU that each task receives. Similar to Lambda, the cost is based on time running and resources used.

EC2 vs Fargate
EC2
- Cheaper
- You are responsible for the underlying OS
- Long-running containers
- Multiple containers share the same host

Fargate
- No OS access
- Pay based on resources allocated and time ran
- Short-running tasks
- Isolated environments

Lambda vs Fargate

Lambda
- Great for unpredicatable or inconsistent workloads
- Perfect for applications that can be expressed as a single function

Fargate
- Great for consistent workloads
- Allows Docker use throughout the organisation
- Greater level of controls by developers


---

Amazon EventBridge (formerly CloudWatch Events)

EventBridge is a serverless event bus. It allows you to pass events from a source to an endpoint.
Essentially, it's the glue that holds your serverless application together.

To create a rule:
1. Define a pattern. Do you want the rule to be invoked based on an event happening? Or do you want it to be scheduled?
2. Select event bus. Is this going to be an AWS-based event?
3. Select your target. What happens when this event kicks off?
4. Tag. Tag everything

---

## Security

TODO

---

## Automation

Why do we Automate?



---


[[aws]]
[[awsec2]]
[[awss3]]
[[awsdb]]
[[awsnetworking]]