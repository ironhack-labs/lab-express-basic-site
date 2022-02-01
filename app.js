//Archivos de node_modules

const express   = require("express")
const app       = express() 

//middlewares variabls de entorno
require("dotenv" ).config()

// carpeta publica del proyecto
app.use(express.static("public"))


//carpeta de vistas
app.set("views", __dirname + "/views")

//template
app.set("view engine", "hbs")

//rutas
app.use("/", require ("./routes/index"))

//Servidor
app.listen (process.env.PORT, () => {

    console.log("servidor activo")
})