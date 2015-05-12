var readline = require("readline"),
  rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt("--> ");
rl.prompt();

var toDoList = [];

var commands = {
  ls: function() {
    console.log(toDoList);
  },
  add: function(item) {
    toDoList.push(item);
  },
  rm: function(item) {
    var found = false;  // set a boolean to false at start of search

    for(var i = 0; i < toDoList.length; i++) {
      console.log("Examining:", toDoList[i]);
      if(item === toDoList[i]) { // if the element matches the search term
        console.log(item, "was removed!");
        found = true;           // set the found flag to true
        toDoList.splice(i, 1);  // remove the element from the array
        --i;
      } else {
        console.log(toDoList[i], "does not match", item);
      } // end if-else
    } // end for

    if (found === false) {
      console.log(item, "was not found in the ToDo list.");
    } // end if
  }
};

rl.on("line", function(line) {
  var words = line.split(" "),  // breaks down the line into an array of words, whitespace delim.
  command = words.shift(),  // assign the first word to the variable command and remove it from the array
  argString = words.join(" ");   // take the remainder of the words as an item

  commands[command](argString); // call the command in the commands object

  rl.prompt();
}); // end rl.on
