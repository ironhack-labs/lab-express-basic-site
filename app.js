const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.static("views"));

app.get("/home", (request, response) => {
  response.sendFile(__dirname + "/views/homepage.html");
});

app.get("/aboutUs", (request, response) => {
  response.sendFile(__dirname + "/views/aboutUs.html");
});

app.get("/services", (request, response) => {
  response.sendFile(__dirname + "/views/services.html");
});

app.get("/impressum", (request, response) => {
  response.sendFile(__dirname + "/views/impressum.html");
});

app.listen(3000, () => console.log("Server running on port 3000"));
