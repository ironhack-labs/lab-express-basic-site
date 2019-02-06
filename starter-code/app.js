// npm init -y 
// npm i -S express
// node app.js // nodemon app.js

let express = require('express')

let app = express()
app.use(express.static('public'))

app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/about.html')
})
app.get("/promociones", (request, response) => {
  response.sendFile(__dirname + '/views/promociones.html')
})
app.get("/encuentranos", (request, response) => {
  response.sendFile(__dirname + '/views/contact.html')
})


app.listen(3000, function() {
  console.log("Ya estoy funcionando en el puerto 3000")
})