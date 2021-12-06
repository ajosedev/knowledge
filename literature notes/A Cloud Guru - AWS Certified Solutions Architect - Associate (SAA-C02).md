# AWS Certified Solutions Architect - Associate (SAA-C02)
Author: A Cloud Guru

https://learn.acloud.guru/course/certified-solutions-architect-associate/dashboard

**22/11/21**

Exam at the end, featuring single value multiple choice (1/4) and multiple value multiple choice (2/5).
Pass mark is 720/100
65 questions, 130 minutes

---

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

[[20211122040610-aws-s3-object-lock]] TODO

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

[[aws]]