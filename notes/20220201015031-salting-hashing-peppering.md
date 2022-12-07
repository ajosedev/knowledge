# Salting, Hashing, and Peppering

## Hashing
Hashing is a simple technique that converts data from a key into a new value, known as the 'hash'. This is often used as a layer of security to avoid storing things like passwords in plaintext, but is also the basis for non-security applications such as hash tables/data storage.
A hashing function is deterministic, given the same input it should produce the same output. Note that a hashing function should be one-way.

Since hashing is determinstic, if two users share a password, even if both are hashed, they would result in the same data being stored in your DB (i.e. the hashed password)

## Salting
Salting helps this by adding extra data before or after the value (e.g. password). This means that unique hashes are create for every input, regardless of the input not being unique.
It also makes the hash function look non-determinstic, which is good for security as it doesn't reveal duplicates.
In practice, the salt needs to be stored incleartext alongside the hash so that we can perform a lookup to validate values when logging in, etc.

Note that using the same salt across hashes is pointless, as this just makes passwords longer but doesn't provide any security. Salts should be generated uniquely upon creation of each stored credential, and not accessible to the public. Ideally salts are created using a cryptographically-strong algorithm.

Having unique salts means that even if one password is cracked, another password is still unknown as it requires figuring out a separate unique salt.

## Peppering
Peppering is similar to salting, in that its added to an input during hashing. However it differs as a pepper should not be stored alongside a hash, but rather in a separate medium. A pepper *should* be secret.

[[security]]