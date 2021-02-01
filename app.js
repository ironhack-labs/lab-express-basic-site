//IMPORT MODULES
const express = require("express");
const app = express();
const PORT = 3000;

//MIDDLEWARE FUNCTION FOR STATIC FILES
app.use(express.static("public"));

//ENDPOINT ROUTES
app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/index.html");
});

app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/about.html");
});

app.get("/work", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/work.html");
});

app.get("/photos", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/photos.html");
});

//START THE SERVER
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
