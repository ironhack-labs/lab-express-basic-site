const express = require("express");
const app = express();
const port = 80;

app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("This is the homepage");

  // console.log(__dirname);
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/works.html");
});

app.get("/gallery", (req, res) => {
  res.sendFile(__dirname + "/views/gallery.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Define routes
//app.get('/', (req, res) => {
//res.send('Hello, world!');
//});

//app.get('/about', (req, res) => {
//res.send('About page');
//});

// Start the server
//app.listen(port, () => {
//console.log(`Server is running on port ${port}`);
//});
