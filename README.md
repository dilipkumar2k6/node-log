# console
## Write custom logger to file
```
const fs = require('fs');
const path = require('path');

const write = fs.createWriteStream(path.join(__dirname,'output.log'));
const error = fs.createWriteStream(path.join(__dirname,'error.log'));

const myLog = new console.Console(write, error);

myLog.log('Hello %d',6)
```

## Write custom logger to screen
```
const fs = require('fs');

const myLog = new console.Console(process.stdout, process.stderr);

myLog.log('Hello %d',6)
```

## Use util.inspect
```
util.inspect(global, {depth:0})
```

## use console.dir to simulate util.inspect
```
console.dir(global, {depth:0})
```

## console.assert
`console.assert` is for quick testing.
- In case of falsy, it throw error
- In case of truthy, it returns undefined

Note: This was fixed in Node v10

# assert module

