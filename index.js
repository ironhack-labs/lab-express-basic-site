require("./config/dbConnection");
const express = require("express");
const hbs = require("hbs");
const path = require("path");
const server = express();
const baseRouter = require("./routes/baseRoute");
const livreModel = require("./models/livre")


server.use("/", baseRouter)
server.use(express.static(path.join(__dirname, "public")))
hbs.registerPartials(path.join(__dirname, "views/partials"))


server.listen(4004, () => {
    console.log("Server running, go to http://localhost:4004 ")
});

// livreModel.create({
//     titre:"Littoral",
//     editeur:"Leméac - Actes Sud",
//     annee:1999,
//     couverture: "./images/littoral.jpg"
// }).then((dbResult) => {
//     console.log(dbResponse)
// }).catch((dbErr) => {
//     console.log(dbErr)
// });