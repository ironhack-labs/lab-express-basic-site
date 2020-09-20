const express = require("express");
const router = new express.Router();
const planetModel = require("../models/Planets");


router.get("/", async (req, res, next) => {
  try {
    res.render("home", {
      planets: await planetModel.find(),
      css: ["mod.home"],
    });
  } catch (err) {
    next(err); 
  }
});


router.get("/profile/:id", (req, res, next) => {
  planetModel.findById(req.params.id)
    .then((planet) => {
      res.render("planetUpdate", { planet, css: ["mod.form"] });
    })
    .catch(next);
});

router.get("/add-new-planet", (req, res) => {
  res.render("planetCreate", { css: ["mod.form"] });
});

router.get("/planet/:id/delete", async (req, res, next) => {
  try {
    await planetModel.findByIdAndRemove(req.params.id);
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    await planetModel.create(req.body);
    res.redirect("/");
  } catch (databaseError) {
    next(databaseError);
  }
});

router.post("/planet/:id/update", async (req, res, next) => {
  try {
    await planetModel.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

router.get("/moon", (req, res) => {
  res.render("moon", {
    js: ["moon"],
    css: ["calendar"],
  });
});

module.exports = router;