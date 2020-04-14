const express = require('express')

const app = express()

//public directory middleware

//endpoints

app.get('/', (req, res) => {
  console.log(req)
  res.send('welcome nerd')
})

//listener
app.listen(3000, () => console.log('App listening on port 3000'))
