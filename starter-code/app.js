const express = require("express");
const hbs = require("hbs");
const app = express();

const port = 3000;
app.listen(port, () => console.log(`Ready on port ${port}`));
