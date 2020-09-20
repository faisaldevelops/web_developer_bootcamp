var request = require("request");

var options = {
  method: 'POST',
  url: 'https://accuweatherstefan-skliarovv1.p.rapidapi.com/get24HoursConditionsByLocationKey',
  headers: {
    'x-rapidapi-host': 'AccuWeatherstefan-skliarovV1.p.rapidapi.com',
    'x-rapidapi-key': 'SIGN-UP-FOR-KEY',
    'content-type': 'application/x-www-form-urlencoded',
    useQueryString: true
  },
  form: {language: 'english', locationKey: 'srinagar'}
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});
