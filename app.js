const express = require("express");
const app = express();
const port = 3000;

// Register public folder and send it to the client
app.use(express.static(__dirname + "/public"));

// Create routes

app.get("/", (req, res) => {
  "use strict";
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res) => {
  "use strict";
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/gallery", (req, res) => {
  "use strict";
  res.sendFile(__dirname + "/views/gallery.html");
});

app.listen(port, () => {
  "use strict";
  console.log(`Listening on port ${port}`);
});
