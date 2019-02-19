const express = require("express");
const app = express();

app.set("port", process.env.PORT || 3000);
app.use(express.static(__dirname + "/public"));

// the __dirname is the current directory from where the script is running
app.get("/", function(req, res) {
  res.render("src/index.js");
});

app.listen(app.get("port"), function() {
  console.log("Running on port: ", app.get("port"));
});