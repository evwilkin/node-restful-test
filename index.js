//Dependencies
var express = require("express");
var app = express();

//Routes
app.get('/', function(req, res) {
  res.send("Oh hi there Evan");
});

app.listen(3000);
console.log("API running on port 3000");