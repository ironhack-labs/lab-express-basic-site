const express = require("express");
const protectRoute = require("../middlewares/protectRoute");
const router = express.Router();
const FamilyModel = require("../models/Family.model");

//use the family of current user to display it in family/show
router.get( "/family", protectRoute, async (req, res, next) => {
    FamilyModel.findById(req.session.currentUser.family)
      .then((dbRes) => {
        console.log(dbRes);
        //  console.log(dbRes);
        res.render("family/show", { dbRes });
      })
      .catch((error) => {
        next(error);
      });
  }
);

module.exports = router;
