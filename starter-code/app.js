const express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static('public'));
//1.Solution - 1
//*************************************************************
app.use(express.static(path.join(__dirname, 'view')));

// //2.Solution - 2
//*************************************************************
// app.get('/:id', (req, res) => {
//   console.log('req.params.id', req.params.id);
//   let filePath =
//     req.params.id === 'home.html'
//       ? '/view/home.html'
//       : req.params.id === 'about.html'
//       ? '/view/about.html'
//       : req.params.id === 'gallery.html'
//       ? '/view/gallery.html'
//       : '/view/404.html';

//   res.sendFile(__dirname + filePath);
// });

// //3.Solution - 3
//*************************************************************
// //Home page
// app.get('/home.html', (req, res) => {
//   console.log('Output for: req', req.path);
//   res.sendFile(__dirname + '/view/home.html');
// });
// //About
// app.get('/about.html', (req, res) => {
//   console.log('Output for: req', req.path);
//   res.sendFile(__dirname + '/view/about.html');
// });
// //Gallery
// app.get('/gallery.html', (req, res) => {
//   console.log('Output for: req', req.path.toUpperCase());
//   //   console.log('Output for: req', req.path.includes('g'));
//   //   console.log('Output for: req', req.path.length);
//   //   console.log('Output for: req', req.path[2]);
//   //   console.log('Output for: req', req.path.substr(1).toUpperCase());
//   //   console.log('Output for: req', req.path.endsWith('y'));
//   //   console.log('Output for: req', req.path.concat('-hello'));
//   //   console.log('Output for: req', req.path.bold());
//   //   console.log('Output for: req', req);
//   res.sendFile(__dirname + '/view/gallery.html');
// });

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

// //4.Solution - 4
//*************************************************************
// http
//   .createServer((req, res) => {
// //1.One way
//     // let filePath = path.join(
//     //   __dirname,
//     //   'view',
//     //   req.url === '/'
//     //     ? 'home.html'
//     //     : req.url === '/about'
//     //     ? 'about.html'
//     //     : req.url === '/gallery'
//     //     ? 'gallery.html'
//     //     : '404.html'
//     // );

//     // console.log(filePath);
//     // fs.readFile(filePath, (err, data) => res.end(data));

// //2. Another way
//     console.log(req.url);
//     req.url === '/'
//       ? fs.readFile(path.join(__dirname, 'view', 'home.html'), (err, data) =>
//           res.end(data)
//         )
//       : req.url === '/about'
//       ? fs.readFile(path.join(__dirname, 'view', 'about.html'), (err, data) =>
//           res.end(data)
//         )
//       : req.url === '/gallery'
//       ? fs.readFile(path.join(__dirname, 'view', 'gallery.html'), (err, data) =>
//           res.end(data)
//         )
//       : fs.readFile(path.join(__dirname, 'view', '404.html'), (err, data) =>
//           res.end(data)
//         );
//   })
//   .listen(PORT, () => console.log(`listening on ${PORT}`));
