const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const abilitySchema = new Schema({
  name: String,
  description: String,
});

const abilityModel = mongoose.model("abilities", abilitySchema);

module.exports = abilityModel;