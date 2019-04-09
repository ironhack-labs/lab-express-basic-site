const express = require("express");
const app = express(); //app is an object


// app sets public folder ressources as accessible : this is mandatory if clients must access some static resources, such as images, etc
app.use(express.static(__dirname + "/public"));

//On the base route (http://localhost:3010/), listen to get request comming
app.get("/", (request, response) => {
  response.send("<h1>Hello world</h1>");
});

app.get("/home", (request, response) => {
  response.sendFile(`${__dirname}/views/home.html`);
});

app.get("/about", (request, response) => {
  response.sendFile(`${__dirname}/views/about.html`);
});

app.get("/courses", (request, response) => {
  response.sendFile(`${__dirname}/views/courses.html`);
});

app.listen(3102, () => {
  console.log("my app started @ http://localhost:3102")
});