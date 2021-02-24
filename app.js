

const express = require('express');
// criando um aplicativo express
const app = express();

//para usar image da pasta public
app.use(express.static('public'));


app.set("views", __dirname + "/views");
app.set("view engine", "hbs");


const router = require("./routes/index.routes");
app.use("/", router);


//iniciar o servidor
app.listen(1234, () => {
  console.log("Express is up and running at port 1234");
});