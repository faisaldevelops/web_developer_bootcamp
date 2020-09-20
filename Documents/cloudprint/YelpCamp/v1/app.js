var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine', 'ejs');

var campgrounds = [
  { name: 'Faisal', image : 'https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&h=350' },
  { name: 'Sayib', image : 'https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=350'},
  { name: 'Saqib', image : 'https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg?auto=compress&cs=tinysrgb&h=350' },
  { name: 'Faisal', image : 'https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&h=350' },
  { name: 'Sayib', image : 'https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=350'},
  { name: 'Saqib', image : 'https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg?auto=compress&cs=tinysrgb&h=350' },
  { name: 'Sayib', image : 'https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=350'},
  { name: 'Sayib', image : 'https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=350'},
  { name: 'Saqib', image : 'https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg?auto=compress&cs=tinysrgb&h=350' },
  { name: 'Faisal', image : 'https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&h=350' }


]

app.get("/", function(req, res){
  res.render('landing');
});

app.get("/campgrounds", function(req, res){

  res.render('campgrounds', {campgrounds : campgrounds});
});


// route for Creating new campground, REST Convention says that when you have a page called 'friends' then to add a new friend, page name should be
// same except for request method
app.post('/campgrounds', function(req, res){ //different route from above campgrounds route as it a POST route, it's also a Convention called REST
  // get data from form and add to campgrounds array
  // redirect back to campgrounds page
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image}
  campgrounds.push(newCampground);
  //redirect to campgrounds page
  res.redirect('/campgrounds');
  //console.log(req);
});

app.get('/campgrounds/new', function(req, res){// third naming convention in REST
  res.render('new');
});

app.listen(3000, function(req, res){
  console.log('YelpCamp v1 server has started!');
});
