const express = require("express");
const app = express();

app.use(express.static("public"));

function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/homepage.html"); //dirname is a global var available in node js which points to the adress n the curretn dir
});

app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/gallery", (request, response) => {
  response.sendFile(__dirname + "/views/gallery.html");
});

app.listen(3000, () => {
  //
});
