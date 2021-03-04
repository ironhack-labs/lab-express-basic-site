const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hsModel = new Schema({
    hsName: String,
    spiceRating: Number,
    flavorRating: Number,
    comments: String,
  });
  
  const hsModel = mongoose.model("hot-sauces", hsModel);
   
  module.exports = hsModel;