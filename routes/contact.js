const express = require('express');
const contactRouter = express.Router();

contactRouter.get("/contact", (req, res) => {
  res.render("contact.hbs", {pageTitle: "Contact"});
});

module.exports = contactRouter;