var express        = require('express'),
        app        = express(),
        bodyParser = require('body-parser'),
        mongoose   = require('mongoose');

mongoose.connect('mongodb://localhost/yelp_camp',{ useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine', 'ejs');

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({ // MongoDB
  name: String,
  image: String,
  description: String
});

var Campground = mongoose.model("Campground", campgroundSchema); //MongoDB

// Campground.create(
//   {
//      name: 'Sayib',
//      image : 'https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=350',
//      description: 'This is a huge granite hill, no bathrooms no water, because it is a hill'
//   }, function(err, campground){
//     if(err){
//       console.log(err);
//     }
//     else{
//       console.log('NEWLY CAMPGROUND CREATED: ');
//       console.log(campground);
//     }
//   });


app.get("/", function(req, res){
  res.render('landing');
});

//INDEX - display a list of campgrounds
app.get("/campgrounds", function(req, res){
  //Get all the campgrounds from the databse and display them
  Campground.find({}, function(err, allCampgrounds){ // MongoDB
    if(err){
      console.log(err);
    } else {
      res.render('index', {campgrounds : allCampgrounds});
    }
  });

  // res.render('campgrounds', {campgrounds : campgrounds});
});


// route for Creating new campground, REST Convention says that when you have a page called 'friends' then to add a new friend, page name should be
// same except for request method

// CREATE - Add a new campground to DB
app.post('/campgrounds', function(req, res){ //different route from above campgrounds route as it a POST route, it's also a Convention called REST
  // get data from form and add to campgrounds array
  // redirect back to campgrounds page
  var name = req.body.name;
  var image = req.body.image;
  var descriptionVar = req.body.descriptionFromForm;
  var newCampground = {name: name, image: image, description: descriptionVar }
  //Create a new campground and save it to database
  Campground.create(newCampground, function(err, newlyCreated){
    if(err){
      console.log(err);
    } else {
      //redirect to campgrounds page
      res.redirect('/campgrounds');
    }
  });

  //console.log(req);
});

// NEW - display a form to make new campground
app.get('/campgrounds/new', function(req, res){// third naming convention in REST
  res.render('new');
});

// '''BE CAREFUL FOR THE ORDER OF ROUTES'''
// Because if /campgrounds/new is written after the /campgrounds/:id
//It will create a problem, it will treat new as id...

// SHOW - show more info about one campground
app.get('/campgrounds/:id', function(req, res){
  //console.log(req);

  //find the campground with provided ID
  Campground.findById(req.params.id, function(err, foundCampground){
    if(err){
      console.log(err);
    } else {
      // render show template with that campground
      res.render('show', {campground: foundCampground});
    }
  });
  // req.params.id
  // // render show template with that campground
  // res.render('show');
  //res.send('THIS WILL BE SHOW PAGE ONE DAY!!!');
});

app.listen(3000, function(req, res){
  console.log('YelpCamp v1 server has started!');
});
