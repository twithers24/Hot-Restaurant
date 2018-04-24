var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var reservations = [
    {
      customerName: "yoda",
      phoneNumber: "123456789",
      customerEmail: "jedimaster@lol.com",
      customerID: "yoda"
    },

    {
        customerName: "eliza",
        phoneNumber: "123456789",
        customerEmail: "elizaj@lol.com",
        customerID: "elizaj"
      }
  ];


  var waitlist = [];


  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });