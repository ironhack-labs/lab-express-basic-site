const express = require("express");
const server = express();
const path = require("path");
const hbs = require("hbs");

const port = 9090;

//Initial setup

server.use(express.static(path.join(__dirname, "public")));

server.set("views", path.join(__dirname, "views"));

hbs.registerPartials(path.join(__dirname, "views/partials"));

server.set("view engine", "hbs");

//Route setup
server.get("/", (HTTPRequest, HTTPResponse) => {
  const data = {
    text: "Welcome to my website. I'm Shannon Kimmel, a junior web developer."
  };
  HTTPResponse.render("home", { data });
});

server.get("/about", (req, res) => {
  const data = {
    css: ["about"],
    title: "About Me",
    content:
      "I studied Spanish at the University of Illinois, with a minor in The Performing Arts. I also got an entry-level Accounting Certificate. Then, I decided to switch directions and become a full-stack web developer."
  };
  res.render("about", { data });
});

server.get("/photoGallery", (req, res) => {
  const data = {
    title: "Photo Gallery",
    css: ["photoGallery"],
    pictures: [
      {
        number: 1,
        name: "pictureOfMe",
        caption: "In the States",
        url: "pictureOfMe copy.jpg",
        needsRotated: false
      },

      {
        number: 2,
        name: "ShannonIronhack",
        caption: "Outside at Ironhack",
        url: "ShannonIronhack.JPG",
        needsRotated: true
      },

      {
        number: 3,
        name: "ShannonIronhack2",
        caption: "Out on the rooftop patio at Ironhack",
        url: "ShannonIronhack2.JPG",
        needsRotated: true
      },

      {
        number: 4,
        name: "Ironhack0120.JPG",
        caption: "My Ironhack cohort",
        url: "Ironhack0120.JPG",
        needsRotated: false
      }
    ]
  };

  res.render("photoGallery", data);
});

//Server Kickstart

server.listen(port, () => {
  console.log(`server is rolling @ http://localhost:${port}`);
});
