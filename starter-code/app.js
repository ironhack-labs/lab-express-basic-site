const express = require("express"); // install express framework
const app = express(); // make our app use express

app.use(express.static("public"));

// -----------
app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/homepage.html");
});

app.get("/about", (request, response, next) => {
    response.sendFile(__dirname + "/views/about.html");
});

app.get("/gallery", (request, response, next) => {
  response.sendFile(__dirname + "/views/gallery.html");
});
// -----------


app.listen(3700, () => {
  console.log("Hello boy!");
});
