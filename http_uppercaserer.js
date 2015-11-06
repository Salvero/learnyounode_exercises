// Exercise 11 - HTTP File Server

Write an HTTP server that receives only POST requests and converts incoming POST body characters to upper-case and returns it to the client.

Your server should listen on the port provided by the first argument to your program.


var http = require('http');
var map = require('through2-map');

upperCaserer = map(function(chunk){
  return chunk.toString().toUpperCase();
});

server = http.createServer(function(request, response){
  if(request.method == 'POST') {
    request.pipe(upperCaserer).pipe(response);
  }
});

server.listen(process.argv[2]);
