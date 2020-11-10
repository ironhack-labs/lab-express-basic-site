const express = require("express");

const app = express();

//MIDDLEWARE
// serving static files with express
app.use(express.static("public"));

// Routes (enpoints)
app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/index.html");
});

app.get("/works", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/works.html");
});

app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/about.html");
});

// start the server
app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
