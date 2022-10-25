const http = require('http');

const server = http.createServer((request, response) => {  
    console.log(request.url);

if(request.url === '/'){
    response.write('WELCOME DEMON!')
    response.end();    
} else {
    response.statusCode = 404; 
    response.write('Page not Found'); 
    response.end(); 
}
});

server.listen(3000);