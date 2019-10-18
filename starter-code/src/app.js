const express = require("express");
const app = express();
const {about, art, home} = require('./routes/pages')

// get public folder
app.use(express.static('public'));

// root
app.get("/", home);

app.get("/art", art)

app.get("/about", about)

// server
app.listen(3000, ()=>{
  console.log("app is running")
})