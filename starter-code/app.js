// load express
const express = require("express");
// create express application
const app = express();
const home = "/";
const about = "/about";
const gallery = "/gallery";

// serves static files on directory fed
// __dirname: The directory name of the current node module
app.use(express.static("public"));

app.get(home, (req, res) => {
  res.sendFile(`${__dirname}/public/views/index.html`);
});

app.get(gallery, (req, res) => {
  res.sendFile(`${__dirname}/public/views/gallery.html`);
});

app.get(about, (req, res) => {
  res.sendFile(`${__dirname}/public/views/about.html`);
});

app.listen(3000, () => {
  // just a message to know node is running
  console.log("Listening on port 3000");
});
