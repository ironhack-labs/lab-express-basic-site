const favoriteCities = document.querySelectorAll(".city-item");

console.log(favoriteCities);

function handleCityClick(city) {
    console.log(city.innerHTML);
    const locationApi = `${fetchWeather}?address=${CITY NAME}`;
    fetchWeatherAPI(locationApi);
  }

favoriteCities.forEach((city) => {
    city.addEventListener("click", (event) => {
      console.log('click')
      const selectedCity = event.target;
      handleCityClick(selectedCity);
    });
  });

// DONT KNOW HOW TO FETCH DATA FROM API + CHANGE PAGE AND DISPLAY REQUIRED DATA (SELECTED CITY)