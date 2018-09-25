const http = require('http');

//Creamos nuestro servidor
const server = http.createServer((req, res) => {

  if (req.url === '/') {
      res.write('Hello, world!');
      res.end();
    }
    else if (req.url === '/about') {
      res.write('My name is Izzy');
      res.end();
    }
    else {
      res.statusCode = 404;
      res.write('404 Page buu');
      res.end();
    }
});

//Eschucha en el puerto 3000
server.listen(3000);
