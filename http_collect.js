// #8 - HTTP Collect

// Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Collect all data from the server (not just the first "data" event) and then write two lines to the console (stdout).

var http = require('http');
var url = process.argv[2];

http.get(url, function(request){
  var result = "";
  request.setEncoding("utf8");
  request.on("data", function(data){
    result += data;
  });
  request.on("end", function(){
    console.log(result.length);
    console.log(result);
  });
});
