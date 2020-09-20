var express = require('express');
var app = express();

//TO tell express app to use public directory
app.use(express.static('public'));// we have to tell the sever to serve the public directpry
app.set("view engine", "ejs"); //now all the files in views will be automaticall of ejs format
                               // SO we don't explicitly write in our routes


app.get("/", function(req, res){
  res.render('home');
});

app.get("/fellinlovewith/:thing", function(req,res){
  var thing = req.params.thing;

  res.render("love", {thingVar : thing});
  // res.send("TEST");
});



app.get("/posts", function(req, res){
  var posts = [
    {title : "Post 1", author : 'susy' },
    {title : "My Adorable Puppy", author : 'charlie' },
    {title : "Cat as a pet", author : 'faisal' },
  ];

  res.render('posts', {postejs : posts});
});



app.listen(3000, function(){
  console.log('Server is listening!!!');
});
