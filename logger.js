const fs = require('fs');
const path = require('path');

const write = fs.createWriteStream(path.join(__dirname,'output.log'));
const error = fs.createWriteStream(path.join(__dirname,'error.log'));

const myLog = new console.Console(write, error);

myLog.log('Hello %d',6)