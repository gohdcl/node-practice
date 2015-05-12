var express = require("express"),
    articles = require("./controllers/articles"),
    bodyParser = require("body-parser"),
    fs = require("fs"),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended":true }));

// CRUD = Create, Read, Update, Delete
// Think about what routes will do what

var notImplemented = function(req, res) {
  res.sendStatus(501);
}

// Mock database
// A article will look like this:
/*  {
      "title": "",
      "body": "",
      "author": "",
      "comments": []
    }
*/
// A comment:
/*
    {
      "name": "",
      "text": ""
    }
*/

// Blog articles
app.get("/articles", articles.index); // READ all blog articles
app.get("/articles/new", articles.new); // CREATE a new article via admin page
app.get("/articles/:articleID", notImplemented); // READ a specific blog article
app.post("/articles", articles.create); // CREATE a new blog article
app.put("/articles/:articleID", notImplemented); // UPDATE a blog article
app.delete("/articles/:articleID", notImplemented); // DELETE a blog article

// Comments
app.post("articles/:articleID/comments", notImplemented); // CREATE a new comment
app.delete("articles/:articleID/comments/:commentID", notImplemented) // DELETE a specific comment

app.listen(3000, function() {
  console.log("Server live on port 3000");
});
