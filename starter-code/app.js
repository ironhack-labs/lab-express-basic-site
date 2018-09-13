const express =  require('express')
const app =  express()
app.use(express.static('public'))

app.get('/', (request, response, next)=>{
  response.sendFile(__dirname + '/view/index.html')
})

///


app.listen(3000, ()=>{

})