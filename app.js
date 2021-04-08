const express = require("express");
const appRoutes = require("./routes/appRoutes");

const app = express();

app.use(express.static("public"));

app.use("/", appRoutes);

app.listen(3003, () => console.log("App listening on PORT 3003!"));
