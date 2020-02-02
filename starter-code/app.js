const express = require("express")
const app = express();

app.use(express.static("public"))

//app.get("/", (request, response) => {
//  response.send(`/views/home`)
//})
app.get("/", (req, res) => {
    
    res.sendFile(`${__dirname}/views/home.html`)
  })
app.get("/about", (req, res) => {
   res.sendFile(`${__dirname}/views/about.html`)
})
app.get("/photo_gallery", (req, res) => {
    
    res.sendFile(`${__dirname}/views/photo_gallery.html`)
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`)
})

