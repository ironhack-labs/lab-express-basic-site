const express = require("express");
const hbs = require("hbs");
const app = express();

//Middleware
app.use(express.static("public"));
app.set("views", __dirname + "/views");

const data = {
  name: "Marc De Mena",
  siteTittle: "Marc De Mena site",
  facebookLink: "https://www.facebook.com/mdemena",
  linkedInLink: "https://www.linkedin.com/in/mdemena",
  twitterLink: "https://www.twitter.com/mdemena",
  siteLink: "https://www.sctechsolutions.es",
  mobilePhone: "+34627462305",
};
//Routes
app.get("/", (req, res) => {
  res.render("index.hbs", data);
});
app.get("/about", (req, res) => {
  res.render("about.hbs", data);
});
app.get("/photo", (req, res) => {
  res.render("photo.hbs", data);
});

app.listen(3000);
