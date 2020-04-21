// Your Website should have (at least) 3 pages:

// A Home page, that welcomes the visitor and links to the other pages on the website.
// An About page, that shares some basic information about the person.
// A Works page, where you showcase some of the work of the person you chose.
// Bonus: A Photo Gallery page, displaying some pictures of the person/their work.

// nodemon helps to restart server!

const express = require("express");

const app = express()
// could be named server..

const port = 3000;

// middleware for using static file sin public folder
app.use(express.static("public"))

// GET endpoint, as in, diff pages
app.get("/test", (req, res, next) => {
    res.send("<hi>testing page!! pure html string here..</h1>")
    console.log("just testing");
})

// sending an actual file

app.get("/", (req, res, next) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/public/views/index.html");
  });

app.get("/about", (req, res, next) => {
    console.log("about page");
    res.sendFile(__dirname + "/public/views/about.html");
})

// listening to port

app.listen(port, () => {
    console.log(`we're up and running in port ${port}.`)
})