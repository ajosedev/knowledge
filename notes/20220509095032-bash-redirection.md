# Redirection in Bash

&> 1> 2> in bash
/dev/null
1 is stdout, 2 is stderr, & is both?
Can redirect into each other, e.g. 2>&1?
Term is 'redirect'
This also is the same as just the standard >, e.g. echo 'Hello' > test.txt
What is >>?

---

Redirection operators allow control of where [[20220509094921-bash-io-streams|input and output streams]] should go. The following are some of the redirect operators in Bash:

`>` - redirect output, overwriting target if exists
`>>` - redirect output, appending instead of overwriting if target exists
`&#>` - redirect file descriptor _#_, where _#_ is the identifier
`<` - redirect input

Streams can be referenced via their 'file descriptor identifier' (number).
An ampersand is required if redirecting to another stream to reduce ambiguity.

`command 1> out.log` - outputs file descriptor 1 (stdout) to file.

Common redirects:

`1>` - redirects stdout only. This is also the same as simply doing `>`
`2>` - redirects stderr only
`2>&1` - redirects stderr to stdout. The final output will contain both stdout and stderr output, if any.
`&>` - redirect stdout and stderr. This is also the same as the above `2>&1`

If certain output isn't wanted, it can redirected to `/dev/null` which functions as a 'black hole' to silence the output.

[[shell]]