// Require Express
const express = require("express");

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
 app.use(express.static(__dirname + "/public"));

//Home route
app.get("/", (request, response, next) =>
  response.sendFile(__dirname + "/public/index.html")
);
//About route
app.get("/about", (request, response, next) =>
  response.sendFile(__dirname + "/views/about.html")
);
//Works route
app.get("/companies", (request, response, next) =>
  response.sendFile(__dirname + "/views/companies.html")
);
//Gallery route
app.get("/gallery", (request, response, next) =>
  response.sendFile(__dirname + "/views/gallery.html")
);


//Launch server
app.listen(3100, () => console.log("listening on port 3100"));
