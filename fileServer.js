var http = require("http"),
    fs = require("fs"),
    path = require("path"),
    url = require("url"),
    mime = require("mime");

var server = http.createServer();

server.on("request", function(req, res) {
  // Possible response codes
  // 404 File not found
  // 500 Internal error
  // 200 OK

  var urlParams = url.parse(req.url),
      fileName = path.join(".", urlParams.pathname); // pathname: /index.html ==> ./index.html

  fs.exists(fileName, function(exists) {
    if(!exists) {
      res.writeHead(404, {"Content-Type": "text/plain"});
      res.end("404 File not found");
    } else {
      fs.readFile(fileName, "binary", function(err, file) {
        if(err) {
          res.writeHead(500, {"Content-Type": "text/plain"});
          res.end("500 Internal Error");
        } else {
          var type = mime.lookup(fileName);
          res.writeHead(200, {"Content-Type": "text/plain"});
          res.write(file, "binary");
          res.end();
        } // end if-else
      }); // end fs.readFile
    } // end if-else
  }); // end path.exists
}); // end server.on

server.listen(3000);
