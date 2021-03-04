const express = require("express");
const router = express.Router();

const Book = require("./../model/Book");

router.get("/", (req, res, next) =>{
    Book.find()
    .then((dbRes) => {
        res.render("books", {books:dbRes});
    })
    .catch((dbError)=> {
        next(dbError);
    });
});

router.get("/:id([a-z0-9]{24})", (req, res, next) => {
  
    Book.findById(req.params.id)
      .then((book) => {
        res.render("one-book", { book });
      })
      .catch((dbError) => {
        next(dbError);
      });
  });




module.exports = router;