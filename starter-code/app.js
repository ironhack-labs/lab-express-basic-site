const express = require('express');
const app = express();



app.get('/', (request, response) => {
    response.send('first server of me');
  });

const port = 3000;
app.listen(port, () => console.log(`Ready express on port ${port}`));