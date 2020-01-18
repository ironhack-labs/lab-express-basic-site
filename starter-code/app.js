const express = require("express");
const hbs = require("hbs");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

// Indico las diferentes páginas

app.get("/", (request, response) => {
  response.render("home", { document: "Home" });
});

app.get("/about", (request, response) => {
  response.render("about", { document: "About" });
});

app.get("/gallery", (request, response) => {
  response.render("gallery", { document: "Gallery" });
});

// Indico que todas las páginas Static están en public

app.use("/static", express.static("public"));

// Arranca Servidor
const port = 3000;
app.listen(port, () => console.log(`Ok express!`));
