feather.replace(); // render feather icons

var fetchWeather = "/weather";

const weatherForm = document.getElementById("location-form");
const input = document.querySelector(".location-input");
const cityName = document.querySelector(".location");
const weatherCondition = document.querySelector(".weather-desc");
const weatherIcon = document.querySelector(".weather-container i");
const temperature = document.querySelector(".weather-temp");
const dayName = document.querySelector(".date-dayname");
const fullDate = document.querySelector(".date-day");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");

//DISPLAY DATE
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
dayName.textContent = `${days[new Date().getDay()]}`;
fullDate.textContent = `${new Date().getDate()}, ${
  months[new Date().getMonth()]
} ${new Date().getFullYear()}`;

function constructURL() {
  cityName.textContent = "Loading...";
  temperature.textContent = "";
  weatherCondition.textContent = "";
  weatherIcon.className = "";
  const locationApi = `${fetchWeather}?address=${input.value}`;
  fetchWeatherAPI(locationApi);
}

function fetchWeatherAPI(locationApi) {
  // API call with input value
  fetch(locationApi).then((response) => {
    // transform response into json
    response.json().then((data) => displayData(data));
  });
}

function displayData(data) {
  if (data.error) {
    cityName.textContent = "nowhere";
    weatherCondition.textContent = data.error;
  } else {
    cityName.textContent = data.cityName;
    temperature.textContent = getCelsiusTemperature(data.temperature);
    weatherCondition.textContent = data.description;
    humidity.textContent = `${data.humidity} %`;
    wind.textContent = `${(data.wind * 3.6).toFixed()} km/h`;
    sunrise.textContent = getTime(data.sunrise);
    sunset.textContent = getTime(data.sunset);
    displayWeatherIcon(data.description);
  }
}

function getTime(data) {
  let timestamp = data;
  var date = new Date(timestamp * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var formattedTime = `${hours} : ${minutes.substr(-2)}`;

  return formattedTime;
}

function getCelsiusTemperature(temperature) {
  let celsiusTemp = `${(temperature - 273.5).toFixed()}${String.fromCharCode(
    176
  )}C`;
  return celsiusTemp;
}

function displayWeatherIcon(condition) {
  if (condition === "Clouds") {
    weatherIcon.className = "wi wi-cloud weather-icon";
  } else if (condition === "Clear" || condition === "Sunny") {
    weatherIcon.className = "wi wi-day-sunny weather-icon";
  } else if (condition === "Fog") {
    weatherIcon.className = "wi wi-fog weather-icon";
  } else if (condition === "Rain") {
    weatherIcon.className = "wi wi-rain weather-icon";
  } else if (condition === "Snow") {
    weatherIcon.className = "wi wi-snow weather-icon";
  } else {
    weatherIcon.className = "wi wi-day-cloudy weather-icon";
  }
}

weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();
  constructURL();
});

window.onload = () => {
  const locationApi = `${fetchWeather}?address=Paris`;
  fetchWeatherAPI(locationApi);
};
