const express = require("express");

const app = express();

app.use(express.static("public"));

//Route handlers 
app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/views/home.html')
})

app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/gallery", (req, res, next) => {
  res.sendFile(__dirname + "/views/gallery.html");
});

app.get("/works", (req, res, next) => {
  res.sendFile(__dirname + "/views/works.html");
});

//App 
app.listen(process.env.PORT || 3000, () => console.log("🏃‍ on port 3000"));
