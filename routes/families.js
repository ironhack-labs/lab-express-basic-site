const express = require('express');
const protectRoute = require('../middlewares/protectRoute');
const router  = express.Router();
const FamilyModel = require("../models/Family.model");


// router.get('/families', (req, res, next) => {
  
//   FamilyModel.find()
//       .then((dbRes) => {
//         // console.log(dbRes);
//         res.render("family/index.hbs", { pets: dbRes });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   });
  

  // router.get("/families/new", (req, res, next) => {
  //   res.render("family/new.hbs");
  // });

  // router.post('/families/new', async (req, res, next) => {
  //   const { nickname, type } = req.body; 
  //   console.log(req.body)
  //   try {
  //     await PetModel.create({
  //       nickname,
  //       type
        
  //     });
  //     res.redirect("/families");
  //   } catch (err) {
  //     next(err);
  //   }
     
  // });

  router.get('/family', /*protectRoute,*/async(req, res, next) => {
  
    FamilyModel.findById(req.session.currentUser.family)
    .then((dbRes) => {
       console.log(dbRes);
      //  console.log(req.params.id);
      res.render("family/show", { dbRes });
    })
    .catch((error) => {
      next(error);
    });
  });

  // router.get("/families/delete/:id", async (req, res, next) => {
  //   try {
  //     await FamilyModel.findByIdAndDelete(req.params.id);
  //     res.redirect("/families");
  //   } catch (err) {
  //     next(err); 
  //   }
  // });

  // router.get('/families/edit/:id', (req, res, next) => {
  //   FamilyModel.findById(req.params.id)
  //   .then((pet) => res.render("family/edit", { pet }))
  //   .catch(next);
  // });
  
  
  // router.post('/families/edit/:id', async (req, res, next) => {
  //   const { nickname, type } = req.body;
  //   try {
  //     await FamilyModel.findByIdAndUpdate(req.params.id, {
  //       nickname,
  //       type
  //     });
  //     res.redirect("/families");
  //   } catch (err) {
  //     next(err);
  //   }
  // });

module.exports = router;

