# Substatution ENV variables place holders recusively in a target folder.
This a simple node js script that will recusively substitute placeholder in the form of `${ENV_VAR}` or `$ENV_VAR` in the folder set in `FILE_PATH` to use.

```$ export FILE_PATH=<path to folder to substitute>```

Export and ENV variables you have in the target folder for example

```$ export ENV_VAR=testenv```

Then run

```$ node cmd.js```

To build the docker image 

```$ docker build . -t mekomsolutions/env-substitution ```
