# DynamoDB Streams and Global Tables

*Streams* are time-ordered sequences of item-level changes in a table.
Streams contain data about inserts, updates, and deletes.
Stored for 24 hours.

*Global tables* are managed multi-master, multi-region replication.
Based on DynamoDB streams, this is great for globally distributed applications. Good for multi-region redundancy or high availability.

[[aws]]
[[awsdb]]