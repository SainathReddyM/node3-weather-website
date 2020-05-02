const request = require("postman-request");

const forecast = (geocode, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=d9b7ba61fd43c3cb743963a524b6bdde&query=" +
    encodeURIComponent(geocode[1]) +
    "," +
    encodeURIComponent(geocode[0]);
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("unable to get weather!", undefined);
    } else if (response.body.error) {
      callback("wrong geocode", undefined);
    } else {
      callback(undefined, response.body);
    }
  });
};

module.exports = forecast;
