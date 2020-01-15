const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();
const route = ['/view/home.html', '/view/about.html', '/view/gallery.html'];

app.use(express.static('public'));
//Home page
app.get('/', (req, res) => {
  console.log('Output for: req', req.path);
  res.sendFile(__dirname + '/view/home.html');
});
//About
app.get('/about', (req, res) => {
  console.log('Output for: req', req.path);
  res.sendFile(__dirname + '/view/about.html');
});
//Gallery
app.get('/gallery', (req, res) => {
  console.log('Output for: req', req.path.toUpperCase());
  //   console.log('Output for: req', req.path.includes('g'));
  //   console.log('Output for: req', req.path.length);
  //   console.log('Output for: req', req.path[2]);
  //   console.log('Output for: req', req.path.substr(1).toUpperCase());
  //   console.log('Output for: req', req.path.endsWith('y'));
  //   console.log('Output for: req', req.path.concat('-hello'));
  //   console.log('Output for: req', req.path.bold());
  //   console.log('Output for: req', req);
  res.sendFile(__dirname + '/view/gallery.html');
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
