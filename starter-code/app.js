const express = require("express");
const port = 3000;

const app = express(); // server object that listens for request

app.use(express.static("public"));
// We setup the folder from which to serve the static files

// ROUTES
//      '/'  GET
app.get("/", (req, res, next) => {
  console.log("HTTP Method", req.method);

  res.sendFile(__dirname + "/public/views/index.html");
});

//      '/about'  GET
app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/about.html");
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}.`);
});
