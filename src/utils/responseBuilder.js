const responseBuilder = (response) => {
  const weather = {
    place:
      response.location.name +
      "," +
      response.location.region +
      "," +
      response.location.country,
    LatLong:
      "Latitude:" +
      response.location.lat +
      ",Longitude:" +
      response.location.lon,
    timezone_id: response.location.timezone_id,
    temp: response.current.temperature,
    forecast: response.current.weather_descriptions[0],
    humidity: response.current.humidity,
    cloudcover: response.current.cloudcover,
    uv_index: response.current.uv_index,
    feelslike: response.current.feelslike,
  };

  return weather;
};

module.exports = responseBuilder;
