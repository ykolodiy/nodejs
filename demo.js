var http = require('http');
var fs = require('fs');


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();

    fs.appendFile('mynewfile1.txt', req.url +"\r\n", function (err) {
  if (err) throw err;
  console.log('Saved!');


});

}).listen(8083);


