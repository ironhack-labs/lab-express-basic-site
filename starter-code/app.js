const express = require('express')

const app = express()
const port = 3000


app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/curso', (req, res) => {
  res.sendFile(__dirname + '/views/web-dev-ft.html')
});

app.get('/students', (req, res) => {
  res.sendFile(__dirname + '/views/students.html')
});




app.listen(port, () => {
  console.log("Server initialized in port 3000")
})