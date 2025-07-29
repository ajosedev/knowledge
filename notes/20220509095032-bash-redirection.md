# Redirection in Bash

Redirection operators allow control of where [[20220509094921-bash-io-streams|input and output streams]] should go. The following are some of the redirect operators in Bash:

`>` - redirect output, overwriting target if exists
	Note, this is the same as `1>` which only redirects stdout
`>>` - redirect output, appending instead of overwriting if target exists
`&#>` - redirect file descriptor _#_, where _#_ is the identifier
`<` - redirect input

Streams can be referenced via their 'file descriptor identifier' (number).
An ampersand is required if redirecting to another stream to reduce ambiguity.

Common redirects:

`>` or `1>` - redirects stdout **only**. This means errors can be silently swallowed
`2>` - redirects stderr only
`2>&1` - redirects stderr to stdout. The final output will contain both stdout and stderr output, if any.
`&>` - redirect stdout and stderr. This is also the same as the above `2>&1`

`echo 'hello' > output.txt` - outputs everything to `output`
`echo 'hello' 1> output.txt 2> errors.txt` - outputs stdout to `output`, and stderr to `errors`

If certain output isn't wanted, it can redirected to `/dev/null` which functions as a 'black hole' to silence the output.

[[20210222163611-echo-status-code]]

[[shell]]