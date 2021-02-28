const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieModel = new Schema({
  title: String,
  year: Number,
  description: String,
  image: String,
  trailer: String,
  bonus: String,
  isFavorite: Boolean
})

const MovieModel = mongoose.model("movies", movieModel);

module.exports = MovieModel;