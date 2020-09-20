require("dotenv").config();
require("./../config/mongodb");

const CityModel = require("./../models/City");

const cities = [
  {
    name: "Paris",
    country: "France",
    language: "French",
  },
  {
    name: "Bangkok",
    country: "Thailand",
    language: "Thai",
  },
  {
    name: "Stockholm",
    country: "Sweden",
    language: "Swedish",
  },
];

CityModel.insertMany(cities)
  .then((dbRes) => console.log(dbRes))
  .catch((dbErr) => console.log(dbErr));
