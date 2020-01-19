const express = require("express");
const app = express();

app.use("/public", express.static("public"));

app.get("/", (request, response) => {
    response.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Cat</title>
        <link rel="stylesheet" href="/public/style.css" />
      </head>
      <body>
        <h1>Cat</h1>
        <p>This is my second route</p>
        <img src="/images/cool-cat.jpg" />
      </body>
    </html>
  `);
});

const port = 3000;
app.listen(port, () => console.log(`Ready express on port ${port}`));
