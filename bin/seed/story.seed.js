const mongoose = require('mongoose');
require("./../app") ;
const StoryModel = require("./../models/Story.model")
const stories = [
    { title: 'Mamie Paulette', place: "Cernoy en Berry", date: 07/07/1990, story:"chocolat chaud avec des vrais carrés de chocolat sur lesquels on verse du lait bouillant" },
    { title: 'Mamie Yvonne', place: "Paris", date: 07/07/2020, story:"Mamie m'apprend à jouer à cache-chache" },
    { title: 'Mamie Rolande', place: "Ardennes", date: 07/07/1995, story:"Mamie m'offre une maison en bois que papy avait construit de ses mains avant sa mort" }
  ];
  StoryModel.insertMany(stories)
  .then(insertStory => console.log(insertStory))
  .catch(err => console.log(err))