# Storage classes in S3

Always 11 9's durability, and availability ranges from 99.5-99.99%.
Generally you can pay less to store data you access less frequently. Retrieval fee applies for any non-standard tiers.

**Standard**: Designed for most workloads - frequent access. 99.99% availability
**Standard-Infrequent Access**: Rapid access, good for long term infrequently accessed critical data.
**One Zone-Infrequent Access**: Long-term, infrequently accessed, non-critical data. Data is stored redundantly within a single AZ.

Glacier is cheap storage, used for very infrequently accessed data - pay for access. Think archiving.
**Glacier**: Long-term data archiving, with retrieval times 1min - 12hrs
**Glacier Deep Archive**: Long-term data arthicing that's rarely accessed, with retrieval time of minimum 12hrs

There's also **S3 Intelligent-Tiering**, which uses ML to automatically move your data to the most cost-effective tier based on how frequently you accesss each object. Adds a per-month cost based on the amount of objects you have.

These storage classes can be used in conjunction with [[20211122034529-aws-s3-lifecycle-management]].

[[aws]]