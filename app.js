const express = require("express");
const app = express();
const port = 3000;


app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.get("/about", (req, res) => {
    res.sendFile(`${__dirname}/views/about.html`);
    });

app.get("/works", (req, res) => {
    res.sendFile(`${__dirname}/views/works.html`);
    });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
