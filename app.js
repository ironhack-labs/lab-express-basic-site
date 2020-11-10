const express = require("express");

const app = express();


// MIDDLEWARE
// middleware for static files
// in the `public` folder we save only the files that our HTML pages will need
app.use( express.static('public')  );


app.get("/", (req, res, next) => {
//  res.send ("<h1>home page</h1>")
    res.sendFile( __dirname + '/public/views/index.html');
});


app.get("/about", (req, res, next) => {
  res.sendFile( __dirname + '/public/views/about.html');
});

app.get("/works", (req, res, next) => {
    res.sendFile( __dirname + '/public/views/works.html');
  });

  app.get("/photos", (req, res, next) => {
    res.sendFile( __dirname + '/public/views/photos.html');
  });


// Start the server
app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
