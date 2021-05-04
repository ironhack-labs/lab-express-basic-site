const express = require('express');
const homeRouter = new express.Router();

homeRouter.get("/", (req, res) => {
  res.render("home.hbs", {pageTitle: "Au revoir, Paris !"});
});

module.exports = homeRouter;