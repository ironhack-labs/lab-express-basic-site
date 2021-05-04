const express = require('express');
const router = new express.Router();

router.get("/contact", (req, res) => {
  res.render("contact.hbs", {pageTitle: "Contact"});
});

module.exports = router;