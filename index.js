//Dependencies
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require('body-parser');

//MongoDB
mongoose.connect('mongodb://localhost:27017/node_restful_test');

//Express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
app.use('/api', require('./routes/api'));

//Start Server
app.listen(3000);
console.log("API running on port 3000");