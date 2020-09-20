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
    } else if (!body.main || !body.weather || !body.wind || !body.sys || !body.name) {
      callback(
        "Cannot find required data for this city, please try another one"
      );
    } else {
      callback(undefined, {
        temperature: body.main.temp,
        description: body.weather[0].main,
        cityName: body.name,
        humidity: body.main.humidity,
        wind: body.wind.speed,
        sunrise: body.sys.sunrise,
        sunset: body.sys.sunset
        // maxtemp: body.main.temp_max
      });
    }
  });
};

module.exports = weatherData;
