feather.replace(); // render feather icons

var fetchWeather = "/weather";

const weatherForm = document.getElementById("location-form");
const input = document.querySelector(".location-input");
const cityName = document.querySelector(".location");
const weatherCondition = document.querySelector(".weather-desc");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".weather-temp");
const dayName = document.querySelector(".date-dayname");
const fullDate = document.querySelector(".date-day");

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

weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(input.value);
});
