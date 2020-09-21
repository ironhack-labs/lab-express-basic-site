const constants = {
  openWeatherMap: {
    BASE_URL: "https://api.openweathermap.org/data/2.5/weather?q=",
    API_KEY: process.env.WEATHER_API_KEY,
  },
};

module.exports = constants;
