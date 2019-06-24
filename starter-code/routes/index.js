const express = require("express");
const GospelSinger = require("../models/gospelSingers");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  GospelSinger.find().then(singers => {
    const textIntro =
      "This website has to goal to share with you a part of my favourite gospel artists Throught this you can see and watch amazing gospel songs who will lead you in the presence of God";
    // db response contains a array of objects containing all the students
    res.render("index", { singers, textIntro }); // render students page and pass it the db response
    console.log(singer);
  });
  /*.catch(err => {
      res.render("index", { err: "an error occured" });
    });
    */
});

router.get("/about/:id", (req, res, next) => {
  GospelSinger.findById(req.params.id)
    .then(seeMoreSingers => {
      console.log(seeMoreSingers);
      res.render("seemore", { seeMoreSingers });
      // db response contains a array of objects containing all the students
    })
    .catch(err => {
      res.render("seemore", { err: "an error occured" });
    });
});

router.get("/error", (req, res) => {
  GospelSinger.find().then(errorMsg => {
    res.render("error", { errorMsg });
  });
});

module.exports = router;
