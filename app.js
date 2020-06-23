const express = require ('express')
var app = express()


app.get('/*', function(req, res){
    res.send('/home/daniel/Documentos/IRONHACK/lab-express-basic-site/views/index.html')
    res.end()
    
})

app.listen (3100, function(){
    console.log('Server listenng at port 3100')

})