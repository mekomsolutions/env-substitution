# env-substitution

Simple Node JS js script that will recusively substitute placeholders in the form of `${ENV_VAR}` or `$ENV_VAR` in the folder set in `FILE_PATH`.

Only files with the extensions as set in [allowedExtensions](https://github.com/mekomsolutions/env-substitution/blob/72000fa08aec24c3dc606db78517ebdbad7f1235/cmd.js#L4) will be taken into account:
```js
const allowedExtensions = ['.json', '.yml', '.yaml', '.csv', '.xml', '.properties', '.txt'];
```

# Quick start

Set the source folder to search in:

`$ export FILE_PATH=<path to folder to substitute>`

Eg:

```
├── my_source_folder
│   └── folder1
│       ├── file.txt - "Hello $WORLD"
```

Export the variables values to be substituted:

`$ export ENV_VAR=testenv`

Eg:

```
export WORLD=Uganda!
```

Run:

`$ node cmd.js`

All references to `ENV_VAR`are now replaced by `testenv`

Eg:


```
├── my_source_folder
│   └── folder1
│       ├── file.txt - "Hello Uganda!"
```


# Build Docker image

To build the docker image

`$ docker build . -t mekomsolutions/env-substitution`
