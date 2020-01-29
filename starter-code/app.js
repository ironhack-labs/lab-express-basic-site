let express = require("express");
let app = express(); // what is the reason for this line?? --> basically creating server

app.set("view engine", "hbs");

app.use(express.static("public"));

app.get("/", (request, response) => {
  //response.sendFile(__dirname + "/views/homepage.html"); <-- can do it this way with regular html files (if not using hps)
  response.render("homepage.hbs");
});

app.get("/gallery", (request, response) => {
  response.render("gallery.hbs");
});

app.get("/about", (request, response) => {
  response.render("about.hbs");
});

app.listen(3000, () => {
  console.log("server is running all the time");
});
