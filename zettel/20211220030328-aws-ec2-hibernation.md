# EC2 Hibernation

If we stop an EC2 instance, the data is kept on the disk (with EBS) and will remain on the disk until the EC2 instance is re-started. If the instance is terminated, by default the root device volume will also be terminated.

When you hibernate an EC2 instance, hibernation saves the contents from RAM to EBS. When you start your instance out of hibernation, the root volume is restored to its previous state and the RAM is restored.

Hibernation makes the instance boot much faster as RAM is preserved. This skips the OS, bootstrap, and applications startup from taking as much time.

There are certain conditions that need to be met for hibernation, such as a MAX ram size, instance family, total time, etc.

[[aws]]
[[awsec2]]