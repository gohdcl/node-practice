module.exports.create = function (req, res) {
};

// rendering an HTML form to let users create a new post
module.exports.new = function (req, res) {
  res.format({"text/html": function() {
  res.send("<!DOCTYPE html>" +
    "<html>" +
    "<head>" +
    "<meta charset='UTF-8'>" +
    "</head>" +
    "<body>" +
    "<form method='post' action='/articles'>" +
    "<input-type='text' placeholder='name'>" +
    "</form>" +
    "</body>" +
    "</html>");
    }
  });
};
