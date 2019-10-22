const bar = function(request, response)  {
    response.send('/');
};

const home = function(request, response)  {
    response.send('home');
};

const about = function(request, response)  {
    response.send('about');
};
const photo = function(resquest, response) {
    response.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Cat</title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>
      <body>
        <h1>Cat</h1>
        <p>This is my second route</p>
        <img src="/images/cool-cat.jpg" />
      </body>
    </html>
    `);
};

module.exports = {
    bar,
    home,
    about,
    photo
}