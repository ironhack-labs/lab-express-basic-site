const express = require('express');
const aboutRouter = express.Router();

aboutRouter.get("/about", (req, res) => {
  res.render("about.hbs", {pageTitle: "About"});
});

module.exports = aboutRouter;