var http = require("http"),
    url = require("url"),
    server = http.createServer();

server.on("request", function(req, res) {
  console.log("---incoming request---");
  incomingURL = url.parse(req.url, true);

  if(incomingURL.path === "/hello") {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hello world");
  } else if(incomingURL.path === "/goodbye") {
    res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Goodbye!");
  } else {
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.end("Error 404: resource not found");
  }

});

server.listen(3000);
