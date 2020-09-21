var request = require('request');
request('https://api.openweathermap.org/data/2.5/weather?q=Srinagar&appid='//enter-api-id-here', function(error, response, body){
  if (!error && response.statusCode == 200 ){
    var parsedData = JSON.parse(body); // to convert the string version into objects version to access using javascript
    console.log(parsedData['main']['temp']);
    console.log(parsedData['weather'][0]['id']);
    //console.log(parsedData.weather.main);
    //console.log(parsedData['weather']['main']);
  }

};
