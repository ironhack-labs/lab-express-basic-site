const express = require("express");
const router = express.Router();
const hsModel = require("./hot-sauces");

// LIST HOT SAUCES

router.get("/hot-sauces", (req, res, next) => {
    console.log("yay, it's working so far!")
    hsModel.find()
    .then((dbRes) => {
        res.render("hot-sauces", {
            hotSauces: dbRes,
        });
    })
    .catch((dbError) => {
        next(dbError);
    });
});

module.exports = router;


//ADD NEW HOT SAUCE

router.post("/add-new", async (req, res, next) => {
// Remember: Keys are set on the HTML form with the name attributes
    const { hsName, spiceRating, flavorRating, comments } = req.body;
    try {
        await HackerModel.create({
          hsName,
          spiceRating,
          flavorRating,
          comments,
        });
        res.redirect("/hot-sauces/add-new");
      } catch (err) {
        next(err);
      }
});


// DISPLAY SPECIFIC HOT SAUCE

router.get("/:id([a-z0-9]{24})", (req, res, next) => {
    hsModel.findById(req.params.id)
        .then((hotSauces) => {
            res.render("single-hot-sauce", {hotSauces});
        })
        .catch((dbError) => {
            next(dbError);
        });
});


// ADD

router.get("/add-new", (req, res, next) => {
    res.render("all-hot-sauces"); // Is this what I want to render? Check during testing.
});


// EDIT

router.get("/edit/:id([a-z0-9]{24}", (req, res, next) => {
    hsModel.findById(req.params.id)
    .then((hotSauces) => res.render("edit", {hotSauces}))
    .catch(next);
});

router.post("/edit/:id", async (req, res, next) => {
    // Remember: Keys are set on the HTML form with the name attributes
        const { hsName, spiceRating, flavorRating, comments } = req.body;
        try {
            await HackerModel.findByIdAndUpdate(req.params.id, {
              hsName,
              spiceRating,
              flavorRating,
              comments,
            });
            res.redirect("/hot-sauces");
          } catch (err) {
            next(err);
          }
    });


// DELETE

router.get("/delete/:id", async (req, res, next) => {
    try {
        await hsModel.findByIdAndDelete(req.params.id);
        res.redirect("/hot-sauces");
    } catch (err) {
        next(err);
    }
});