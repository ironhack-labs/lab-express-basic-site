const express = require("express");

const app = express();

app.use(express.static("public"));

// ROUTE
// -----------
// A URL THAT IS VISITABLE IN OUR APPLICATION 
app.get("/", (request, response, next) => {
  response.sendfile(__dirname + "/views/home-page.html");
});

app.get("/about", (request,response,next) => {
  response.sendfile(__dirname + "/views/about.html");
});

app.get("/photo", (request,response,next) => {
  response.sendfile(__dirname + "/views/photo-gallery.html");
});

console.log("DIRNAME " + __dirname);

app.listen(3000, () =>  {
  console.log("Server ready!");
});