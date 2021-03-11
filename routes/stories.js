const express = require('express');
const protectRoute = require('../middlewares/protectRoute');
const router  = express.Router();
//const FriendModel = require("../models/Story.model");
const FamilyModel = require("../models/Family.model");
const StoryModel = require("../models/Story.model");
const uploader = require("./../config/cloudinary");


router.get('/stories', (req, res, next) => {
  
  StoryModel.find()
      .then((dbRes) => {
         console.log(dbRes);
        res.render("stories/index.hbs", { stories: dbRes });
      })
      .catch((error) => {
        console.log(error);
      });
  });
  

  router.get("/stories/new", (req, res, next) => {
    FamilyModel.find()
    .then((family) => {
       console.log("family is" + family);
      res.render("stories/new.hbs", { family });
    })
    .catch((error) => {
      console.log(error);
    })
  });

  router.post('/stories/new', uploader.single("picture"),async (req, res, next) => {
    const { title, place, date, story, family} = req.body; 
    console.log(req.session)
    console.log(req.session.currentUser.name)
    console.log("tot",req.body)
    let picture;
    if (req.file) {
      picture = req.file.path;
    }
    let author = req.session.currentUser.name;
    let user = req.session.currentUser._id;
   
   try {
    await StoryModel.create({
      title, 
      place, 
      date, 
      story, 
      family,
      author,
      user,
    });
    res.redirect("/stories");
  } catch (err) {
    next(err);
  }
     
  });

  router.get('/stories/:id', (req, res, next) => {
  
    StoryModel.findById(req.params.id).populate("user family")
      .then((dbRes) => {
         console.log(dbRes);
        //  console.log(req.params.id);
        res.render("stories/show.hbs", { dbRes });
      })
      .catch((error) => {
        next(error);
      });
  });

  router.get("/stories/delete/:id", async (req, res, next) => {
    try {
      await StoryModel.findByIdAndDelete(req.params.id);
      res.redirect("/stories");
    } catch (err) {
      next(err); 
    }
  });

  router.get('/stories/edit/:id', (req, res, next) => {
    StoryModel.findById(req.params.id)
    .then((story) => res.render("stories/edit", { story }))
    .catch(next);
  });
  
  
  router.post('/stories/edit/:id', async (req, res, next) => {
    const { title, place, date, story } = req.body;
    try {
      await StoryModel.findByIdAndUpdate(req.params.id, {
        title,
        place,
        date,
        story
      });
      res.redirect("/stories");
    } catch (err) {
      next(err);
    }
  });

module.exports = router;

