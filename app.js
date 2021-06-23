const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
    response.sendFile(__dirname + '/views/index.html')
})
app.get('/about', function(request, response){
    response.sendFile(__dirname + '/views/about.html')
})
app.get('/works', function(request, response){
    response.sendFile(__dirname + '/views/works.html')
})


app.listen(3000, function(){
    console.log('this listens to port 3000')
});
