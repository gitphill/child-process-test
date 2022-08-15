# Child Process Test

Test Node.js child_process breaking point.

Generate the input

```shell
base64 /dev/urandom | head -c 3000000000 > input
```

Execute test

```shell
npm test
```

See `RangeError: Invalid string length`.
