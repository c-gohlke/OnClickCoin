const express = require("express");
const path = require('path')

const app = express();

const port = normalizePort(process.env.PORT || '3000');

console.log("server.js called")

app.set("port", port);
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

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}


module.exports = app