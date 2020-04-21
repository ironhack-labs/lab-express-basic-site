const express = require("express");

// Create the server instance
const app = express();
const PORT = 3000;

app.use(express.static("public"));

// HOME PAGE

app.get("/", (req, res, next) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/public/views/index.html");
  });

// ABOUT PAGE

app.get("/about", (req, res, next) => {
    res.sendFile(__dirname + "/public/views/about.html");
  });

// WORK PAGE

app.get("/work", (req, res, next) => {
    res.sendFile(__dirname + "/public/views/work.html" )
})

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
  });