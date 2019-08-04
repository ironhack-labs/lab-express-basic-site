// require express
const express = require(`express`);
const PORT = 3000;

// We require our own server named app
// an Express server handling requests and responses
const app = express();

// make everything inside of public/ available
app.use(express.static(`public`))


//  `/` => means your local3000.  our home first route
app.get('/', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + `/views/home-page.html`);
});

// the about route
app.get(`/about`, (request, response, next) => {
  console.log(request);
  console.log(__dirname);
  response.sendFile(__dirname + `/views/about-page.html`)
});

app.get(`/gallery`, (request, response, next) => {
  console.log(request);
  console.log(__dirname);
  response.sendFile(__dirname + `/views/gallery-page.html`)
});


// server started
app.listen(PORT, () => {
  console.log(`My first app listening on port 3000!`)
});