// ----------------Require Express
const express = require('express');

// ----------------We create our own server named app
// ----Express server handling requests and responses
const app = express();

// ----------------Make everything inside of public/ available
app.use(express.static('public'));

// ----------------Create route (Home)
//-----Initial route
// app.get('/home', (request, response, next) => {
//   console.log(request);
//   response.send('<h1>Welcome Ironhacker. :)</h1>')''
// });
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home-page.html'));

// ----------------Create route (About)
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));

// ----------------Create route (Gallery)
app.get('/gallery', (request, response, next) => response.sendFile(__dirname + '/views/gallery.html'));

// ----------------Server Started
app.listen(3000, () => console.log('My first app listening on port 3000!'));