const express = require("express");
const router = new express.Router();
const messageModel = require("../model/message");


router.post("/messageForm", (req, res, next) => {
    messageModel.create(req.body)
      .then((dbRes) => {
        res.redirect("/contact");
      })
      .catch((dbErr) => {
        next(err);
      });
  });

  module.exports = router;