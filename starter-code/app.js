const express = require("express");

const app = express();

app.use(express.static("public"));
// app.use(express.static("views"));
// app.use(express.static("assets"));

// express method
app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`); // express method
});

app.get("/about", (request, response) => {
  //   response.send("This is the about page");
  response.sendFile(`${__dirname}/views/about.html`);
});

app.get("/gallery", (request, response) => {
  //   response.send("This is the about page");
  response.sendFile(`${__dirname}/views/gallery.html`);
});

app.listen(3000, () => {
  console.log("Server listening on port: 3000");
});
