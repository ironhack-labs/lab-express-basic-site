const express = require("express");
const app = express();
const hbs = require("hbs");

app.use(express.static(__dirname + "/public"));

app.set("views", __dirname + "/views");

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home", {
    pageTitle: "Princess Diana Home",
    imageCaptions: {
      images: "Diana-home",
      captions: "caption 1",
    },
    // audio: []
  });
});

app.get("/bio", (req, res) => {
  res.render("bio", {
    pageTitle: "Biography",
    imageCaptions: [
      {
        images: "Diana-bio",
        captions: "caption 1",
      },
      {
        images: "diana-bio2",
        captions: "caption 2",
      },
      {
        images: "diana-bio3",
        captions: "caption 3",
      },
      {
        images: "diana-bio4",
        captions: "caption 4",
      },
    ],
  });
});

app.get("/philanthropy", (req, res) => {
  res.render("philanthropy", {
    pageTitle: "Philanthropy",
    imageCaptions: [
      {
        images: "diana-philanthropy1",
        captions: "with Hillary Clinton",
      },
      {
        images: "diana-philanthropy2",
        captions: "Walking amongst landmines in Angola",
      },
      {
        images: "diana-philanthropy3",
        captions: "with an AIDS victim",
      },
    ],
  });
});

app.listen(3000, () => {
  console.log("server is ready ! http://localhost:3000");
});
