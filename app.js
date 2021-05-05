const express = require("express");
const hbs = require("hbs");

const app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
//hbs.registerPartial(__dirname + "/views");

//first route:
app.get("/", (req, res) => {
  //console.log(request);
  res.render("home.hbs");
});

app.get("/about", (req, res) => {
  res.render("about.hbs");
});

app.get("/contact", (req, res) => {
  res.render("contact.hbs");
});

const baseRouter = require("./routes/index.js");
const userRouter = require("./routes/users.js");

app.listen(3000);

/*(PORT, () => {
  console.log("server is ready to rock on @ http://localhost:" + PORT);
});*/
