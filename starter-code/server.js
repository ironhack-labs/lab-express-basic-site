const express = require("express"); // get the framework !
const hbs = require("hbs"); // require the templating engine
// you get a function that you should use ton generate the backend app !!!
const path = require("path"); // part of the node's core lib
const server = express();
// console.log(server);
const port = 3001;
server.listen(port);

/** APP INITAL SETUP !!! MANDATORY **/

// Make everything inside of public/ available to the browser (styles, images, frontend scripts)
server.use(express.static(path.join(__dirname, "public"))); // how does it know it's inside "starter code" ??

// indicates express where our "views" templates are located
server.set("views", path.join(__dirname, "views"));

// indicates express wich view engine this app will use ; )
server.set("view engine", "hbs");
// ***************************** //

server.get("/", (request, response) => {
  // hbs will "prepare" (convert) the file into proper html before
  // sending the response back top the client :)

  response.render("home", {
    title: "Norway in a nutshell",
    title2: "From Oslo to Bergen"
  });
});

server.get("/about", (request, response) => {
  const data = {
    titleUp: "History",
    titleDown: "Trip steps",
    // and then create link for each and navigate through the pages
    steps: [
      "Oslo",
      "Geilo",
      "Hardangervidda",
      "Voringfossen",
      "Gudvangen",
      "Bergen"
    ]
  };
  response.render("about", data);
});

server.get("/gallery", (request, response) => {
  response.render("gallery");
});