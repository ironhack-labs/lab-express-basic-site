const express = require("express");

// We create our own server named app
// Express server will be handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static("public"));

// our first Route:
// app.get("/home", (request, response, next) => {
//   console.log(request);
//   response.send("<h1>Welcome Ironhacker. :)</h1>");
// });

// our first Route:
app.get("/home", (request, response, next) => {
  console.log(__dirname);
  response.sendFile(__dirname + "/public/views/index.html");
});
app.get("/about", (request, response, next) =>
  response.sendFile(__dirname + "/public/views/about.html")
);
app.get("/works", (request, response, next) =>
  response.sendFile(__dirname + "/public/views/works.html")
);
app.get("/gallery", (request, response, next) =>
  response.sendFile(__dirname + "/public/views/gallery.html")
);

app.listen(3000, () => console.log("ITS ALIVE"));
