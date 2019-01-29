const express = require("express");

// we create our own server named app
// express server habdling requests and responses
const app = express();

// make everything inside of /public available
app.use(express.static("public"));

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

let pictures = [
  "michael-1",
  "michael-2",
  "michael-3",
  "michael-4",
  "michael-5",
  "michael-6",
  "michael-7",
  "michael-8"
];

// our first route: GET http://localhost:3000
app.get("/", (req, res, next) => {
  let hour = new Date().getHours();
  let minutes = new Date().getMinutes();
  shuffle(pictures);
  res.render("index", {
    variable1: "<i>the fastest</i>",
    variable2: 42,
    hour,
    minutes,
    isMorning: hour <= 11,
    isAfternoon: hour >= 12 && hour <= 18,
    pictures: pictures
  });
});
app.get("/about", (req, res, next) => {
  res.render("about");
});
// app.get("/photo-gallery", (req, res, next) => {
//   res.sendFile(__dirname + "/views/photo-gallery.html");
// });
app.get("/gallery", (req, res, next) => {
  shuffle(pictures);
  res.render("gallery", { pictures: pictures });
});

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

// starts the server
app.listen(3000, () => {
  console.log("My first is ready: http://127.0.0.1:3000!");
});
