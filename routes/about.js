const express = require('express');
const aboutRouter = new express.Router();

aboutRouter.get("/about", (req, res) => {
  res.render("about.hbs", {pageTitle: "About"});
});

module.exports = aboutRouter;