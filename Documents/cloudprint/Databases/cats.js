var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cat_app',{ useNewUrlParser: true, useUnifiedTopology: true}); //cat_app is the name of database wher we want to connect... if there is database it'll simply connect else it creates it for us

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//adding a new cat to the debug

// var george = new Cat({
//   name: "Mrs. Norris",
//   age: 7,
//   temperament: "Evil"
// });

// george.save(function(err, cat){
//   if(err){
//     console.log('SOMETHING WENT WRONG');
//   } else {
//     console.log('We just saved a cat to the DB');
//     console.log(cat);
//   }
// });

Cat.create({
  name: 'Snow White',
  age: 11,
  temperament: 'Bland'
}, function(err, cat){
  if(err){
    console.log(err);
  } else {
    console.log('New cat added');
    console.log(cat);
  }
});

//retrieve all cats from the DB and console.log each one

Cat.find({}, function(err, cats){
  if(err){
    console.log("Oh No, error!");
    console.log(err);
  } else {
    console.log('ALL THE CATS....');
    console.log(cats);
  }
});
