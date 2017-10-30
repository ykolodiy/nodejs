var http = require("http");
var fs = require("fs");
var util = require("util");

var content;
fs.readFile('input.txt', function (err, data) {
   if (err) return console.error(err);
   content = data;
   console.log(data.toString());
});




http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as data from text file input.txt




response.end(content + "ty suka");
}).listen(8282);

// Console will print the message
console.log('Server running at http://127.0.0.1:8282/');
