// #6 - Make it Modular

// This problem is the same as the previous but introduces the concept of modules. You will need to create two files to solve this.
//
// Create a program that prints a list of files in a given directory, filtered by the extension of the files. The first argument is the directory name and the second argument is the extension filter. Print the list of files (one file per line) to the console. You must use asynchronous I/O.
//
// You must write a module file to do most of the work. The module must export a single function that takes three arguments: the directory name, the filename extension string and a callback function, in that order. The filename extension argument must be the same as what was passed to your program. Don't turn it into a RegExp or prefix with "." or do anything except pass it to your module where you can do what you need to make your filter work.

var module = require('./module.js'),
    dirName = process.argv[2],
    ext = process.argv[3];

module(dirName, ext, function (err, files){
    if (err) {
        console.error(err);
        return;
    }
    files.forEach(function (el){
        console.log(el);
    });
});

// also with module.js
