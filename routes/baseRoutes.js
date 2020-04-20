const express = require("express")
const router = new express.Router()

const path = require('path');
router.use(express.static(path.join(__dirname, 'public')));

const friends = [{
    name: "Moa Winberg 🤩",
    about: "Moa är en rolig tjej från Halmstad. Hon är tillsammans med Robin som gillar att samla på klockor.",
    age: 27,
    url: "images/moa.jpg",
    interests: ["Inredning", "design", "konverteringsoptimering", "mat"]
  },
  {
    name: "Jolina Noresson 😻",
    about: "Jolina är en rolig tjej som kommer från Västerås. Vi har haft väldigt kul tillsammans. Hon bor i en lägenhet med havsutsikt tillsammans med Charlie.",
    age: 26,
    url: "images/jolina.jpg",
    interests: ["Löpning", "mat", "ABAP", "semester"]
  },
  {
    name: "Natalie Nilsson ❤️",
    about: "Natalie är min favoritroomie. Hon älskar mat, hästar och att resa. Någon gång vill hon backpacka i Sydamerika.",
    age: 27,
    url: "images/natalie.jpg",
    interests: ["MAT", "bakning", "Halmstad", "voltige"]
  },
]

const travels = [{
    country: "Tyskland",
    city: "Berlin",
    year: 2017
  },

  {
    country: "Åland",
    city: "Mariehamn",
    year: 2017
  },

  {
    country: "Polen",
    city: "Krakow",
    year: 2017
  },
  {
    country: "Israel",
    city: "Tel Aviv",
    year: 2018
  },
]

const travelImages = [{
    place: "Åland",
    year: "2017",
    url: "images/1.jpg",
  },
  {
    place: "Åland",
    year: "2017",
    url: "images/2.jpg",
  },
  {
    place: "Åland",
    year: "2017",
    url: "images/3.jpg",
  },
  {
    place: "Åland",
    year: "2017",
    url: "images/4.jpg",
  },
  {
    place: "Åland",
    year: "2017",
    url: "images/5.jpg",
  },
  {
    place: "Åland",
    year: "2017",
    url: "images/6.jpg",
  },
  {
    place: "Berlin",
    year: "2017",
    url: "images/8.jpg",
  },
  {
    place: "Berlin",
    year: "2017",
    url: "images/9.jpg",
  },
]


router.get("/", function (request, response) {
  response.render("home.hbs", {
    friends,
    styles: ["green.css"],
  });
});

router.get("/gallery", (request, response) => {
  response.render("gallery.hbs", {
    travelImages,
    styles: ["pink.css"],
  });
})

router.get("/about", (request, response) => {
  response.render("about.hbs", {
    styles: ["green.css"],
  });
})

router.get("/travels", (request, response) => {
  response.render("travels.hbs", {
    travels,
    styles: ["pink.css"],
  });
})

module.exports = router;