const express = require("express");
const router = express.Router();
const MovieModel = require("./../models/Movie.model");

router.get("/", (req, res) => {
  MovieModel.find()
  .then(dbRes => {
    res.render("movies", { movies: dbRes });
  })
  .catch(err => next(err));
});

module.exports = router;