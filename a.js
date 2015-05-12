var b = require("./b.js");
var fs = require("fs");
b();

function createFile(n) {
  for(var i = 0; i < n; i++) {
    fs.writeFile(i+".txt", "", "utf8", function(err) {
      if(err) {
        throw err;
      } // end if
      console.log("file created!");
    });
  } // end for
} // end createFile()

var count = 2;
createFile(count);
