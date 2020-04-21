const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

console.log("test")
//       /         GET    - route/endpoint
app.get("/", (req, res, next) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/public/views/index.html");
  });
  
  //       /about    GET     - route/endpoint
  app.get("/about", (req, res, next) => {
    res.sendFile(__dirname + "/public/views/about.html");
  });
  
 //       /about    GET     - route/endpoint
 app.get("/works", (req, res, next) => {
    res.sendFile(__dirname + "/public/views/works.html");
  });
  
  app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
  });