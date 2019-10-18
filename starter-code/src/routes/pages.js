const { root } = require("../constants");

const home = (request, response, next) => {
  response.sendFile(root + "/views/index.html");
};

const about = (request, response, next) => {
  response.sendFile(root + "/views/about.html");
};

const art = (request, response, next) => {
  response.sendFile(root + "/views/art.html");
};

module.exports = {
  home,
  about,
  art
};
