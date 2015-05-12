var express = require("express"),
    app = express();

app.get("/hello", function(req, res) {
  res.send("Hello, world!");
});

app.get("/goodbye", function(req, res) {
  res.send("Goodbye, world!");
});

app.all("*", function(req, res) {
  res.sendStatus(404);
});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
