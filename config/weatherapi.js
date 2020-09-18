require("dotenv").config();
// pas sure de pouvoir utiliser .env
const constants = {
  openWeatherMap: {
    BASE_URL: "https://api.openweathermap.org/data/2.5/weather?q=",
    API_KEY: WEATHER_API_KEY,
  },
};

module.exports = constants;
