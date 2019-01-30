// connect to express
const express = require("express");
// create app, run through express
const app = express();

// define port
app.listen(420, () => {
  // confirm connection
  console.log("sup, dunia");
});

// connect folders -- public
app.use(express.static(__dirname + `/public`));

// ROUTES
// point towards the relevant files for each page

// home
app.get("/", (request, response, next) => {
  // send home-page.html (in views)
  response.sendFile(__dirname + "/views/home-page.html");
});

// about
app.get("/about", (request, response, next) => {
  // send about-page.html (in views)
  response.sendFile(__dirname + "/views/about-page.html");
});

// gallery
app.get("/gallery", (request, response, next) => {
  // send gallery.html (in views)
  response.sendFile(__dirname + "/views/gallery.html");

  // $("img").hover(
  //   () => {
  //     $("img").animate({ opacity: 1.0 }, 500);
  //   },
  //   () => {
  //     $("img").animate({ opacity: 0.5 }, 500);
  //   }
  // );
});
