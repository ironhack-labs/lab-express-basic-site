const express =require('express');

const app = express ();

const PORT = process.env.PORT || 3000 ;

app.use (express.static(__dirname + '/public'))



app.listen (PORT, () => {
  console.info(`App listen at ${PORT} port`);
});

