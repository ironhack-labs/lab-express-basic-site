const express = require("express")
const app = express()

app.use(express.static('public'));

app.get("/", (req, res) =>{
  res.sendFile(`${__dirname}/views/index.html`);
})
app.get('/contacto', (req, res) => {
  res.sendFile(`${__dirname}/views/contacto.html`);
});
app.get('/macplan', (req, res) => {
  res.sendFile(`${__dirname}/views/macplan.html`);
});

app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
})
