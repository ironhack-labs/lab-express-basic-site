const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home-page.html");
});

app.get("/about-me", (request, response, next) => {
  response.sendFile(__dirname + "/views/about-me.html");
});

app.get("/photos", (request, response, next) => {
  response.sendFile(__dirname + "/views/photo-gallery.html");
});

// const slideIndex = 1;

// const plusDivs = n => showDivs((slideIndex += n));

// const showDivs = n => {
//   let i;
//   const x = document.getElementsByClassName("mySlides");
//   if (n > x.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = x.length;
//   }
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex - 1].style.display = "block";
// };
// showDivs(slideIndex);

app.listen(3000, _ => console.log("Starting my first express site..."));
