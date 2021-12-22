# AWS Certified Solutions Architect - Associate (SAA-C02)
Author: A Cloud Guru

https://learn.acloud.guru/course/certified-solutions-architect-associate/dashboard

**22/11/21**

Exam at the end, featuring single value multiple choice (1/4) and multiple value multiple choice (2/5).
Pass mark is 720/100
65 questions, 130 minutes

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

Different relational database engines available, including Amazon's own Aurora.

RDS is optionally multi-AZ, which is only used for disaster recovery. Faults on the primary mean the secondary automatically becomes the primary. Note that this doesn't increase performance, it's for disaster recovery only. Performance can be increased with read replicas (TODO - link).

AWS handles the replication for you, so any writes happen on both.

Automated backups are possible

RDS are generally used for online transaction processing (OLTP). not online analytical processing (OLAP)
OLTP - processes data from transactions in real time. Large numbers of small transactions
OLAP - complex queries to analyse historical data. Large amounts of data.

---

Read Replicas

These are used to increase (read) performance with RDS. Read replicas are a read-only copy of your primary database. That way, your queries don't add any extra load to your primary DB.

Read replicas *can* be in a different AZ or region, but it's not required.

Each read replica has its own DNS endpoint.

Replicas can be promoted to their own database, however this breaks the replication.

Automated backups must be enabled to deploy a read replica.

---

Amazon Aurora

Amazon's own RDS engine. MySQL and PostgreSQL compatible.

5x better performance than MySQL and 3x better than PostgreSQL, for a much lower price point.

Start with 10gb, scales in 10gb increments up to 128tb. Compute resources can scale massively too.

2 copies of your data are contained in each AZ, with a nimum of 3 AZs (for a total of 6 copeis).

3 different types of replicas available
- 15 read replicas with Aurora
- 5 read replicas with Aurora MySQL
- 5 read replicas with Aruror PostgreSQL

Automated backups are always enabled.
You can also take snapshots, which can be shared with AWS accounts.

Aurora Serverless also exists, that automatically starts up, shuts down, and scales up/down depending on your application's needs. Good for infrequent or unpredictable workloads.

---

DynamoDB

Amazon's own NoSQL database.

Fully managed, and supports both document and key/value data models.

Stored on SSD  storage, spread across 3 geoegraphically distinc data centers.

Eventually consistent reads (default), with ability to opt-in to strongly consistent reads. The former means that consistency across all copies of data is usually reached within a second (best read performance), the latter returns a result that refelects all writes prior to the read.

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

---

When do we use DynamoDB transactions?



---

[[aws]]
[[awsec2]]
[[awss3]]