var express = require('express');
var app = express();
var request = require('request');


app.set('view engine', 'ejs');


app.get('/', function(req, res){
  res.render("search");
});


app.get ("/results", function(req, res){
  // console.log(req.query.search_value);
  var query = req.query.search_value;
  var url = "http://www.omdbapi.com/?apikey=df3c6045&s=" + query; //THIS IS A DYNAMIC URL
  // console.log(url);
  request(url , function(error, response,  body){

    if(!error && response.statusCode == 200){
      // REMEMBER """"BODY"""" is a string
      //---------------------------------
      //to convert it into JS obejct we parse it
      var parsedData = JSON.parse(body);
      // var resultsReturned = results['Search'].length
      // res.send(results['Search']);
      res.render('results',{data : parsedData});


      // console.log(resultsReturned);
    }
  });
  // res.send("Hello, it works!");

});


app.listen(3000, function(req,res){
  console.log("Movie app has started");
});
