const express = require("express");
const router = express.Router();
const Subscriber = require("./../model/Subscriber");

router.get("/", (req, res) => {
    res.render("newsletter");
});

router.post("/subscribe", async (req, res, next) => {

    const { email, fullname} = req.body;
    try {
      await Subscriber.create({
        email,
        fullname,
      });
      res.redirect("newsletter");
    } catch (err) {
      next(err);
    }
  });


module.exports = router;