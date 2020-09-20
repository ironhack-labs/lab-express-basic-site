const express = require("express");
const router = new express.Router();
const weatherData = require("../public/js/weatherData");
const CityModel = require("./../models/City");

router.get("/", (req, res) => {
  res.render("home", {
    title: "WEATHER APP",
  });
});

router.get("/favorites", async (req, res) => {
  res.render("favorites", {
    cities: await CityModel.find(),
    title: "FAVORITE CITIES",
    css: ["mod.favorites"],
  });
});

router.get("/favorites/:id/delete", async (req, res, next) => {
  try {
    await CityModel.findByIdAndRemove(req.params.id);
    res.redirect("/favorites");
  } catch (err) {
    next(err);
  }
});

router.get("/add-city", (req, res) => {
  res.render("addCity", {
    title: "ADD A NEW CITY",
    css: ["mod.form"],
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

  weatherData(
    address,
    (
      error,
      {
        temperature,
        description,
        cityName,
        humidity,
        wind,
        sunrise,
        sunset,
      } = {}
    ) => {
      if (error) {
        return res.send({ error });
      }
      console.log(
        temperature,
        description,
        cityName,
        humidity,
        wind,
        sunrise,
        sunset
      );
      res.send({
        cityName,
        temperature,
        description,
        humidity,
        wind,
        sunrise,
        sunset,
      });
    }
  );
});

router.get("*", (req, res) => {
  res.render("404", { title: "page not found" });
});

module.exports = router;
