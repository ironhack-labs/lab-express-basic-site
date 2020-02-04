//Requerimos Express
const express = require('express')

//Instanciamos express asignandoselo a app
const app = express()

//declaramos el meddleware con todos los documentos estátitcos en la carpeta public
app.use(express.static('public'))

//creamos los enpoints de ls paginas que vamos a utilizar 
app.get('/', (req, res) => res.sendFile(`${__dirname}/views/index.html`))
app.get('/about', (req, res) => res.sendFile(`${__dirname}/views/about.html`))
app.get('/photo', (req, res) => res.sendFile(`${__dirname}/views/photo-gallery.html`))

//levantar el servidor 

app.listen(3000,()=> console.log("el servidor esta levandado"))