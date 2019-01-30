const express = require("express");
const app = express();

app.listen(8888, () => {
    console.log(`Our Express app is READY`);
});


app.use(express.static(__dirname + "/public"));

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});
app.get("/pizza", (request, response, next) => {
  response.sendFile(__dirname + "/views/pizza-gallery.html");
});
app.get("/burger", (request, response, next) => {
  response.sendFile(__dirname + "/views/burger-gallery.html");
});
