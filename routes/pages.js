const express = require("express");
const router = new express.Router();
const weatherData = require("../public/js/weatherData");

router.get("/", (req, res) => {
  res.render("home", {
    title: "Weather App",
  });
});

// My API calling open weather map api
//localhost:8080/weather?address=xxx
router.get("/weather", (req, res) => {
  const address = req.query.address;

  if (!address) {
    return res.send({
      error: "please enter a city",
    });
  }

  weatherData(address, (error, { temperature, description, cityName } = {}) => {
    if (error) {
      return res.send({ error });
    }
    console.log(temperature, description, cityName);
    res.send({
      cityName,
      temperature,
      description,
    });
  });

  //   res.render("weatherWidget");
});

router.get("*", (req, res) => {
  res.render("404", { title: "page not found" });
});

module.exports = router;
