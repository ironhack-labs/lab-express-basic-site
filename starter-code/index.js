//Create a const that requires the express dependency
const express = require("express");

//Create a const that will be an instance of our server.
const app = express();

app.use(express.static("public"));

//At the start of our website we will get the root directory. Which is / - the homepage.
app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(`${__dirname}/views/home.html`);
});

//If user selects the About option, it will be redirected to the About page.
app.get("/about", (req, res) => {
  res.sendFile(`${__dirname}/views/about.html`);
});

//If user selects the Photogallery option in the nav bar, it will be redirected to a gallery.
app.get("/photogallery", (req, res) => {
    res.sendFile(`${__dirname}/views/photogallery.html`);
  });

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});

