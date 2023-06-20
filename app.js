const express = require("express");
const app = express();

app.use(express.static("public"));

//the first route
app.get("/home", (request, response, next) =>
  response.sendFile(__dirname + "/views/home.html")
);

// the about page
app.get("/about", (request, response, next) =>
  response.sendFile(__dirname + "/views/about.html")
);

// the aworks page
app.get("/works", (request, response, next) =>
  response.sendFile(__dirname + "/views/works.html")
);

// the 3000 server thingy
app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
