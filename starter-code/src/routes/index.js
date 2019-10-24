const { rootPath, viewPath } = require('../../constants');

const bar = function(request, response) {
    response.send('/');
};

const home = function(request, response) {
    response.send('home');
};

const about = function(request, response) {
    response.send('about');
};
const photo = function(resquest, response) {
    response.sendFile(rootPath + '/views/cat-page.html');
};

module.exports = {
    bar,
    home,
    about,
    photo
};