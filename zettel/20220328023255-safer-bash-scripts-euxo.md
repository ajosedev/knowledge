# Creating safer bash scripts with 'set -euxo pipefail'

A quick primer on why you should use these flags.

`set -e` causes a bash script to exit immediately when a command fails. By default the command is ignored and execution continues. Using `<command> || true` lets you workaround this option.

`set -o pipefail` sets the exit code of a pipeline to that of the rightmost command to exit with a non-zero status, or to zero if all commands of the pipeline exit successfully.

`set -u` treats unset variables as an error and exit immediately. This does not effect variable assignments with a default.

`set -x` prints each command before executing it. This is helpful for debugging. Arguments get expanded before printing.

[[shell]]