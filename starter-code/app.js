require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT;
const path = require("path");
const hbs = require("hbs");

const app = express();

// INITIAL SETUP
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname, "views/partials"));

// ROUTES
app.use(require(path.join(__dirname, "routes/index")));

// KICKSTART
app.listen(PORT, () => {
  console.log(`Server is running @ http://localhost:${PORT}`);
});
