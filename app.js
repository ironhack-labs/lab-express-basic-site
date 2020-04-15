const express = require("express");
const app = express();
app.use(express.static("public")); //our static files gona be public
//those 3 lines boilerplate template where all those lines are added
app.get("/", (request, response) => {
  response.send("<h1>home</h1>");
});
app.listen(3000, () => {
  console.log("server listening");
});
app.get("/About", (req, res) => {
  res.sendfile(__dirname + "/views/About.html");
});
app.get("/Home", (req, res) => {
  res.sendfile(__dirname + "/views/Home.html");
});
app.get("/Works", (req, res) => {
  res.sendfile(__dirname + "/views/Works.html");
});
app.get("/Gallery", (req, res) => {
  res.sendfile(__dirname + "/views/Photo-Gallery.html");
});
