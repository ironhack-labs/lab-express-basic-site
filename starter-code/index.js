//Create a const that requires the express dependency
const express = require("express");

//Create a const that will be an instance of our server.
const app = express();

app.use(express.static("public"));

//At the start of our website we will get the root directory. Which is / - the homepage.
app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(`${__dirname}/views/home-page.html`);
});

//If user selects the About option, it will be redirected to the About page.
app.get("/views/about.html", (req, res) => {
  res.sendFile(`${__dirname}/views/cat.html`);
});

//If user selects the Photogallery option in the nav bar, it will be redirected to a gallery.
app.get("/views/photogallery.html", (req, res) => {
    res.sendFile(`${__dirname}/views/cat.html`);
  });

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});

