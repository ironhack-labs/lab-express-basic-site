const express = request('express');
const hbs = request('hbs');
const server = express();

server.get('/', (req, res) => {
  res.render('home.hbs', {});
});

server.get('/about', (req, res) => {
  res.render('about.hbs', {});
});

server.get('/works', (req, res) => {
  res.render('works.hbs', {});
});

server.get('/gallery', (req, res) => {
  res.render('gallery.hbs', {});
});

server.listen(3001, () => {
  console.log('Server running...');
});
