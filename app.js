// Require Express

const express = require("express");
const app = express();
app.use(express.static("public"));

// Route Handlers

// Home page route handler
function homeHandler(req, res) {
  res.sendFile(__dirname + "/views/home.html");
}

// About page handler
function aboutHandler(req, res) {
  res.sendFile(__dirname + "/views/about.html");
}

// Works Page handler
function worksHandler(req, res) {
  res.sendFile(__dirname + "/views/works.html");
}
app.get("/", homeHandler);
app.get("/about", aboutHandler);
app.get("/works", worksHandler);

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
