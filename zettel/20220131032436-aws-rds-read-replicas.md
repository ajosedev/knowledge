# RDS Read Replicas

These are used to increase read performance with RDS. Read replicas are a read-only copy of your primary database. That way, your queries don't add any extra load to your primary DB.

Read replicas *can* be in a different AZ or region, but it's not required.

Each read replica has its own DNS endpoint.

Replicas can be promoted to their own database, however this breaks the replication.

Automated backups must be enabled to deploy a read replica.

Note that this is different to multi-AZ RDS, which is only used for disaster recovery.

[[aws]]
[[awsdb]]