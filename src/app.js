const path = require("path");
const express = require("express");
const hbs = require("hbs");

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const responseBuilder = require("./utils/responseBuilder");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");
const templateDirectory = path.join(__dirname, "../templates/views");
const partialsDirectory = path.join(__dirname, "../templates/partials");
app.use(express.static(publicDirectoryPath));
app.set("view engine", "hbs");
app.set("views", templateDirectory);
hbs.registerPartials(partialsDirectory);

app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather App",
    creator: "Sainath Reddy",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "Weather App",
    creator: "Sainath Reddy",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Weather App",
    creator: "Sainath Reddy",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "please Enter valid address",
    });
  } else {
    geocode(req.query.address, (error, response) => {
      if (error) {
        return res.send({
          error: error,
        });
      } else {
        forecast(response.features[0].center, (error, response) => {
          if (error) {
            return res.send({
              error: error,
            });
          } else {
            return res.send(responseBuilder(response));
          }
        });
      }
    });
  }
});

app.get("*", (req, res) => {
  res.render("404", {
    message: "404 bad request, webpage does not exist",
    creator: "Sainath Reddy",
  });
});

app.listen(3000, () => {
  console.log("App has started at port 3000!");
});
