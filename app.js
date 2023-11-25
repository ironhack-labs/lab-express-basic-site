
const express = require('express')

const app = express()


app.use(express.static('public'))

// Route: GET /
app.get('/', (req,res) => {
  // The response is the file '/views/home.html'
  res.sendFile(__dirname + '/views/home.html')
})

// Route: GET /about
app.get('/about', (req,res) => {
  res.sendFile(__dirname + '/views/about.html')
})

// Route: GET /work
app.get('/work', (req,res) => {
  res.sendFile(__dirname + '/views/work.html')
})

// Launch the server on port 3000
app.listen(3000, () => {
  console.log("Server launched and accessible on http://localhost:3000/")
})