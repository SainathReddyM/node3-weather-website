const request = require("postman-request");

const geocode = (place, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(place) +
    ".json?access_token=pk.eyJ1Ijoic2FpbmF0aC1ub2RlIiwiYSI6ImNrOWdzcW5rczAxcnMzbW12eTZ1ZGg5MXcifQ.l5Vo7yCJb7Fy_HAgj9IU_g";
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("could not get the geocode!", undefined);
    } else if (response.body.features.length === 0) {
      callback("please enter valid city name", undefined);
    } else {
      callback(undefined, response.body);
    }
  });
};

module.exports = geocode;
