import 'whatwg-fetch'

var apiUrl = 'https://api.openweathermap.org/data/2.5/';
var apiKey = 'appid=ed1eda378b22e0cb4e2aed03940060e8';

function parseJSON(response) {
  return response.json();
}

export default function getForecast(callback) {
  fetch(apiUrl + 'forecast?q=New%20York&units=imperial&' + apiKey)
    .then(parseJSON)
    .then(callback);
}
