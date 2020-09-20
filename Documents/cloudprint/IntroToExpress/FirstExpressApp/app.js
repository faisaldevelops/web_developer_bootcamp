var express = require('express');
var app = express();

//--------------------------------
//            ROUTES
//--------------------------------

//ROUTE 1
// "/" => "Hi, there!"
app.get("/", function(req,res){
  res.send("Hi there!");
});

//Route 2
// "/bye" => "Goodbye"
app.get("/bye", function(req,res){
  res.send("Goodbye!");
});

// Route 3
// "/dog" => "MEOW!"
app.get("/dog", function(req,res){
  console.log("Someone made a request to /dog!!!");
  res.send("MEOW!");
});

app.get("/r/:subredditName", function(req,res){
  console.log(req.params);
  var subreddit = req.params.subredditName.toUpperCase();
  res.send("WELCOME TO A " + subreddit + " SUBREDDIT!");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
  res.send("WELCOME TO A COMMENTS PAGE!");
  console.log(req.params);
});

//-------------------------------
//    * ROUTE
//-------------------------------
app.get("*", function(req, res){
  res.send("YOU ARE A STAR!!");
});


// Tell Express to listen for requests( Start server )
app.listen(3000, function(req,res){
  console.log("Server has started");
});
