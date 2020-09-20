const mongoose = require("mongoose");

const CitySchema = new mongoose.Schema({
  name: String,
  country: String,
});

const CityModel = mongoose.model("cities", CitySchema);

module.exports = CityModel;