// #3 - Write a program that uses a single synchronous filesystem operation to read a file and print the number of newlines (\n) it contains to the console (stdout), similar to running cat file | wc -l.

var fs = require('fs');

var filepath = process.argv[2];

file = fs.readFileSync(filepath);

contents = file.toString();

console.log(contents.split('\n').length -1);
