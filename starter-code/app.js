const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/home", (request, response, next) => {
    console.log("Home");
    response.sendFile(__dirname + '/views/home.html');
})

app.get("/about", (request, response, next) => {
    console.log("About us");
    response.send(__dirname + '/views/about.html')
})

app.get("/photo-gallery", (request, response, next) => {
    console.log("About us");
    response.send(__dirname + '/views/photo-gallery.html');
})

app.listen(3000, () => {
    console.log('Wowwww my first app listening on port 3000!')
  });


