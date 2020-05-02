const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const loading = document.querySelector("#loading");
const weatherDiv = document.querySelector("#weather");

const weatherHtml = (weather) => {
  var data = "<ul>";
  data += "<li>" + weather.LatLong + "</li>";
  data += "<li> Timezone_id: " + weather.timezone_id + "</li>";
  data += "<li> Temperature: " + weather.temp + "</li>";
  data += "<li> Forecast: " + weather.forecast + "</li>";
  data += "<li> Humidity: " + weather.humidity + "</li>";
  data += "<li> UV Index: " + weather.uv_index + "</li>";
  data += "<li> Feels Like: " + weather.feelslike + "</li>";
  data += "</ul>";
  console.log(data);
  return data;
};

weatherForm.addEventListener("submit", (e) => {
  loading.textContent = "Loading...";
  weatherDiv.innerHTML = "";
  e.preventDefault();
  const location = search.value;
  console.log(location);
  fetch("http://localhost:3000/weather?address=" + location).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          loading.textContent = data.error;
          weatherDiv.innerHTML = "";
        } else {
          loading.textContent = data.place;
          weatherDiv.innerHTML = weatherHtml(data);
        }
      });
    }
  );
});
