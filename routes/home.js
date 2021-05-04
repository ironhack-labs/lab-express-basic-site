const express = require('express');
const homeRouter = express.Router();

homeRouter.get("/", (req, res) => {
  res.render("home.hbs", {pageTitle: "Au revoir, Paris !"});
});

module.exports = homeRouter;