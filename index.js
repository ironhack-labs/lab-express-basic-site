const express = require("express")
const app = express()

app.use(express.static("./starter-code/public"))

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/starter-code/views/home.html`);
  });

  app.get("/home", (req, res) => {
    res.sendFile(`${__dirname}/starter-code/views/home.html`);
  });
  
app.get("/about", (req, res) => {
    res.sendFile(`${__dirname}/starter-code/views/about.html`);
  });

app.get("/gallery", (req, res) => {
    res.sendFile(`${__dirname}/starter-code/views/gallery.html`);
  });

const PORT = 3000
app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`);
  });