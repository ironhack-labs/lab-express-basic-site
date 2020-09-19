const request = require("request");
const constants = require("../../config/weatherapi");

const weatherData = (address, callback) => {
  const url =
    constants.openWeatherMap.BASE_URL +
    encodeURIComponent(address) +
    "&appid=" +
    constants.openWeatherMap.API_KEY;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("cannnot fetch data from open weather map api", undefined);
    } else {
      callback(undefined, {
        temperature: body.main.temp,
        description: body.weather[0].description,
        cityName: body.name,
      });
    }
  });
};

module.exports = weatherData;
