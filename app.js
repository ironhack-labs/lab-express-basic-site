const express = require("express");

const app = express();

const PORT= 3000;

app.use(express.static("public"));

app.use(express.static("views"));


app.get("/", (req, res, next) => {
    // res.send("<h1>HOME PAGE</h1>");
    res.sendFile(__dirname + "/public/views/index.html");
  });

app.get("/works", (req, res, next) => {
    // res.send("<h1>WORKS PAGE</h1>");
    res.sendFile(__dirname + "/public/views/works.html");
  });
  
app.get("/about", (req, res, next) => {
    // res.send("<h1>ABOUT PAGE</h1>");
    res.sendFile(__dirname + "/public/views/about.html");
  });
  
  // START THE SERVER
 
  app.listen(3000, ()=>{
    console.log("This is PORT 3000")
})
