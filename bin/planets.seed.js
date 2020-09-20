require("dotenv").config();
require("../config/mongodb");

const planetModel = require("../models/Planets");

const planets = [
  {
    name: "Sun",
    img: "https://www.extremetech.com/wp-content/uploads/2020/01/NASA-Sun.jpg",
    surface: "12,000 × Earth",
    volume: "1,300,000 × Earth",
    mass: "333,000 × Earth",
    age: "4.6 billion years",
  },
  {
    name: "Mercury",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/600px-Mercury_in_color_-_Prockter07-edit1.jpg",
    surface: "0.147 Earths",
    volume: "0.056 Earths",
    mass: "0.055 Earths",
  },
  {
    name: "Venus",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/PIA23791-Venus-NewlyProcessedView-20200608.jpg/600px-PIA23791-Venus-NewlyProcessedView-20200608.jpg",
    surface: "0.902 Earths",
    volume: "0.866 Earths",
    mass: "0.815 Earths",
  },
  {
    name: "Mars",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/600px-OSIRIS_Mars_true_color.jpg",
    surface: "0.284 Earths",
    volume: "0.151 Earths",
    mass: "0.107 Earths",
  },
  {
    name: "Jupiter",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/600px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
    surface: "121.9 Earths",
    volume: "1,321 Earths",
    mass: "317.8 Earths",
  },
  {
    name: "Saturn",
    img:
      "https://space-facts.com/wp-content/uploads/saturn.png",
    surface: "83.703 Earths",
    volume: "763.59 Earths",
    mass: "95.159 Earths",
  },
  {
    name: "Uranus",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/600px-Uranus2.jpg",
    surface: "15.91 Earths",
    volume: "63.086 Earths",
    mass: "14.536 Earths",
  },
  {
    name: "Uranus",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/600px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg",
    surface: "14.98 Earths",
    volume: "57.74 Earths",
    mass: "17.147 Earths",
  },
];

planetModel
  .insertMany(planets)
  .then((dbRes) => console.log(dbRes))
  .catch((dbErr) => console.log(dbErr));
