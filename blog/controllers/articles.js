var posts = []; // Not persistent, gets overwritten each server restart

module.exports.create = function (req, res) {
  req.body.comments = [];
  posts.push(req.body);
  res.redirect("/articles");
};

module.exports.index = function(req, res) {
  res.json(posts);
};

// rendering an HTML form to let users create a new post
module.exports.new = function (req, res) {
  var fs = require("fs");
  // NOTE: fs.readFile path is from the current working directory, that of server.js
  fs.readFile("./views/new-article.html", "utf8", function(err, data) {
    if(err) {
      throw err;
    }
    res.send(data);
  });
};
