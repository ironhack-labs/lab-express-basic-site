const express = require("express");


const app = express();

//middleware
app.use( express.static('public')  );


//endpoints

app.get("/", (req, res, next) => {


  res.sendFile( __dirname + '/public/views/index.html');
});

app.get("/about", (req, res, next) => {
  // res.send("<h1>About Page</h1>");

  res.sendFile( __dirname + '/public/views/about.html');
});


app.get("/works", (req, res, next) => {
    
      res.sendFile( __dirname + '/public/views/works.html');
    });


    // app.get("/works", (req, res, next) => {
    
    //   res.sendFile( __dirname + '/public/views/galeries.html');
    // });
    

// Start the server
app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
