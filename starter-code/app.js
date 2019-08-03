// ----------------------------------
// app ---> our express server
// get ---> the http verb needed to access the page
// / ---> the route
// request ---> an object containing info about the request
// such as the headers and any data we need to send to the client
// next ---> handles errors
// sendFile() ---> allows response with contents of file.
// alternative to send() which only allows to send a string directly
// ---------------------------------

// require express
const express = require('express')

// express server handling requests and responses
const app = express()

// make everything inside of public/ available
app.use(express.static('public'))

// route
app.get('/', (request, response, next) => {
  console.log(__dirname)
  response.sendFile(__dirname + '/views/index.html')
})

app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html')
})

app.get('/gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/gallery.html')
})

// server started
app.listen(3000, () => {
  console.log('listening on port 3000')
})
