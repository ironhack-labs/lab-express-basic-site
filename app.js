/*const express = require('express');
const PORT= 3000;

const app=express();

app.use(express.static('public'));
 app.get("/",(req, res,next)=> {

    res.sendFile(_dirname +'/public/views/index.html')
 }
 )

 app.listen('3000',()=>{
     console.log("Server is working")
 })*/
 const express = require("express");

// We create the server we will use for
// handling the requests and responses
const app = express();


// MIDDLEWARE
// middleware for static files
// in the `public` folder we save only the files that our HTML pages will need
app.use( express.static('public')  );


// 127.0.0.1:3000/cat.jpeg
// 127.0.0.1:3000/dog.jpeg

// 127.0.0.1:3000/css/about.css   --- Triggered by   <link rel="stylesheet" href="/css/about.css" />



// ROUTES (endpoints)
app.get("/", (req, res, next) => {

  // res.send("<h1> Welcome Ironhackers ! </h1>");

  res.sendFile( __dirname + '/public/views/index.html');
});


app.get("/about", (req, res, next) => {
  // res.send("<h1>About Page</h1>");

  res.sendFile( __dirname + '/public/views/about.html');
});

app.get("/works",(req, res, next)=> {

res.sendFile(__dirname+'/public/views/works.html');
})



// Start the server
app.listen(3000, () => {
  console.log("Server is running at port 3000");
});