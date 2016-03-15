//console.log("Ciao");

/// Server ************************************
//var http = require("http");

//http.createServer(function (request, response) {
//  response.writeHead(200, {'Content-Type': 'text/plain'});

//  response.end('Ciao');
//}).listen(8081);

// console.log('Node Server is running');


/// Read file *********************************
// Blocking
// var fs = require("fs");
// var data = fs.readFileSync('testFile.txt');
// console.log(data.toString());

// Non-Blocking
// var fs = require("fs");
// fs.readFile('testFile.txt', function(err, data) {
//   if(err)return console.error(err);
//   console.log(data.toString());
// });


// Events ************************************
http://www.tutorialspoint.com/nodejs/nodejs_event_loop.htm
