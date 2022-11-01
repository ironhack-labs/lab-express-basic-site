const express = require("express");
const app = express();
app.use(express.static("public"));
/////////////////////////////////

// Route home
app.get("/home", (req, res, next) =>
  response.sendFile(__dirname + "/views/index.html")
);

// Route menu
app.get("/menu", (req, res, next) =>
  response.sendFile(__dirname + "/views/menu.html")
);

// Route about
app.get("/about", (req, res, next) =>
  response.sendFile(__dirname + "/views/about.html")
);

// Route works
app.get("/works", (req, res, next) =>
  response.sendFile(__dirname + "/views/works.html")
);

//404
app.all("*", function (req, res) {
  res.json({ message: "Page not found" });
});

// Server start
app.listen(3000, () => console.log("Server started"));
