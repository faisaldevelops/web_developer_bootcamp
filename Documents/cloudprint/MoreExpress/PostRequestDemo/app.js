var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : true}));

app.set("view engine", "ejs");

var friends = ["f1", "f2", "f3", "f4", "f5"];

app.get("/", function(req, res){
  res.render("home");
});

app.post("/addFriend", function(req, res){
  var newFriend = req.body.newfriend;
  friends.push(newFriend);
  res.redirect('/friends');

});

app.get("/friends", function(req,res){

  res.render("friends", {friendsArray : friends });
});

app.listen(3000, function(req, res){
  console.log("Server Started!!!");
});
