# Read types in DynamoDB

By default, DynamoDB has *eventually consistent* reads, meaning that consistency across all copies of data is usually reached within a second.
This has the best read performance.

You can opt-in to *strongly consistent reads*, meaning a read will return a result that reflects all writes prior to the read.

[[aws]]
[[awsdb]]