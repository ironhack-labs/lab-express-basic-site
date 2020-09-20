require("dotenv").config();
require("./../config/mongodb");

const CityModel = require("./../models/City");

const cities = [
  {
    name: "Paris",
    country: "France",
  },
  {
    name: "Bangkok",
    country: "Thailand",
  },
  {
    name: "Stockholm",
    country: "Sweden",
  },
];

CityModel.insertMany(cities)
  .then((dbRes) => console.log(dbRes))
  .catch((dbErr) => console.log(dbErr));
