const express = require('express')

const app = express()
//adding static files
app.use(express.static('public'))

app.get('/about', (request, response)=>{
  response.sendFile(__dirname + '/views/index.html')
})

app.get('/',(req, res)=>{

  res.sendFile(__dirname + '/views/home.html')

})
app.get('/photos',(reqe, rese)=>{

  rese.sendFile(__dirname + '/views/photos.html')
  
  })

app.listen(3001,()=>{
console.log('listo')
})

