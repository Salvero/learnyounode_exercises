# Exercise - Time server

// Write a TCP time server!
//
// Your server should listen to TCP connections on the port provided by the first argument to your program. For each connection you must write the current date & 24 hour time in the format:
//
//     "YYYY-MM-DD hh:mm"
//
// followed by a newline character. Month, day, hour and minute must be zero-filled to 2 integers. For example:
//
//     "2013-07-06 17:42"


var net = require('net');

function pad(num) {
  return num < 10 ? '0' + num : num
}

var server = net.createServer(function(socket){
  date = new Date();
  string = date.getFullYear() + "-"
         + pad(date.getMonth() + 1) + "-"
         + pad(date.getDate()) + " "
         + pad(date.getHours()) + ":"
         + pad(date.getMinutes()) + "\n";
  socket.end(string);
});

server.listen(process.argv[2]);
