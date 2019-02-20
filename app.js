const express = require("express");
const path = require('path')

const app = express();

console.log("server.js called")

app.set("port", process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'src')); 

app.use(express.static(__dirname + "/public"));

// the __dirname is the current directory from where the script is running
app.get("/", function(req, res) {
  console.log("rendering ", __dirname + "/src/index.js")
  res.render(__dirname + "index.js");
});

app.listen(app.get("port"), function() {
  console.log("Running on port: ", app.get("port"));
});

module.exports = app