const mongoose = require("mongoose");

const PlanetSchema = new mongoose.Schema({
  name: String,
  img : {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg",
  },
  surface : String,
  volume : String,
  mass : String,
  age : String
});

const planetModel = mongoose.model("planets", PlanetSchema);

module.exports = planetModel;
