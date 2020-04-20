const express = require("express");
const hbs = require("hbs");
const app = express();
const path = require("path")

console.log(__dirname)
// app.use(express.static(path.join(__dirname, "public")))
app.use(express.static('public'))
app.set("view engine", "hbs"); // Sets the default view engine

const baseRouter = require("./routes/baseRoutes")
app.use("/", baseRouter)

hbs.registerPartials(path.join(__dirname + "/views/partials"))

app.listen(5001, () => {
  console.log("Server running at http://localhost:5001");
});