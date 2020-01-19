const express = require('express');
const hbs = require('hbs');

const PORT = 3000;
const app = express();

// Express & hbs config
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials")

// Request handlers
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => console.log(`Server ready and listening to port ${PORT}`));