# EC2 Bootstrap scripts

This is a script that runs when the instance first runs. This obviously adds boot time, but is useful for automating installation of applications.

You can add a bootstrap script when launching an EC2 instance in the AWS console.

Note that bootstrap scripts are 'user data'. 'Metadata' refers to data about the EC2 instance such as IP address.

[[aws]]
[[awsec2]]
