# DynamoDB Transactions

Taps into [[ACID]] (Atomic, Consistent, Isolated, Durable)
DynamoDB transactions provide ACID across 1 or more tables within a single AWS account and region.

Transactions are 'all or nothing', either everything works or nothing does.
Use cases: financial transactions, fulfilling orders, etc.

3 options for reads: eventual consistency, strong consistency, and transactional [[20220131033026-aws-dynamodb-reads]]
2 options for writes: standard and transactional

[[aws]]
[[awsdb]]