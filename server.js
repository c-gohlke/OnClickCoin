const express = require("express");
const app = express();

console.log("server.js called")

app.set("port", process.env.PORT || 3000);
app.use(express.static(__dirname + "/public"));

console.log("directory name is, ", __dirname)

// the __dirname is the current directory from where the script is running
app.get("/", function(req, res) {
  console.log("rendering ", __dirname + "/src/index.js")
  res.render(__dirname + "/src/index.js");
});

app.listen(app.get("port"), function() {
  console.log("Running on port: ", app.get("port"));
});
