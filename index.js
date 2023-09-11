var http = require('http');
var fs = require("fs");
var path = require("path");

http.createServer(function (req, res) {
  if(req.url == "/"){//pagina principala
  var filePath = path.join(__dirname, 'index3.html');
  var stat = fs.statSync(filePath);

res.writeHead(200, {
  'Content-Type': 'text/html',
  'Content-Length': stat.size
});

var readStream = fs.createReadStream(filePath);
readStream.pipe(res);
}
}).listen(8080);
