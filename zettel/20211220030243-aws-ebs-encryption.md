# EBS encryption

Uses AES-256 through AWS Key Management Service (AWS KMS) custom master keys (CMK).

When encrypting, data at rest and in flight is encrypted. Future snapshots and volumes created from the snapshot are also then encrypted.

Has a minimal impact of latency.

Copying an unencrypted snapshot allows encryption.

To encrypt and unencrypted volume:
1. Create a snapshot
2. Create a copy of the snapshot and select the encrypt option
3. Create an [[20211206023827-aws-ec2-ami|AMI]] from the encrypted snapshot
4. Use that AMI to launch new encrypted instances

[[aws]]
[[security]]