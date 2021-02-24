const express = require("express");

const app = express();

app.use(express.static("public"));

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

const router = require("./routes/index.routes");
app.use("/", router);

app.listen(3005, () => console.log("Running Express at pot 3005."));
