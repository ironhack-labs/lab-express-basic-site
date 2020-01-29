const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (resonse, request) => {
  console.log("Hello World!");
  request.sendFile(__dirname + "/views/index.html");
});

app.get("/about-me", (response, request) => {
  request.sendFile(__dirname + "/views/about-me.html");
});

app.get("/gallery", (response, request) => {
  request.sendFile(__dirname + "/views/gallery.html");
});

app.listen(4000);
