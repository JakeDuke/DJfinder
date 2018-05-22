
var express = require("express");
var app = express();
var path = require('path');
var bodyParser= require('body-parser')


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(function(req, res, next) {
	console.log("----- request received ------")
	next()
})

// app.use("/", express.static(path.join(__dirname + '/public')));

// let djservice = require("./djservice");
// app.use("/api", djservice);

app.use("/", express.static(path.join(__dirname + '/vue-input-form')));

let djservice = require("./djservice");
app.use("/api", djservice);


app.listen(3001, function() {
    console.log("listening in port 3001")
})