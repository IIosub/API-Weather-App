// const apiKey = "f3e51c69dcc0d385851ded2f71199df2"; // API Key
// const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ]; // An array with days of the week

// const searchButton = document.getElementById("search-button");
// searchButton.addEventListener("click", displayWeather);

// const searchValue = document.getElementById("search-input").value;

// function displayWeather(e) {
//   e.preventDefault();
//   const displayCity = document.getElementById("city");
//   const temperature = document.getElementById("temp");
//   const wind = document.getElementById("wind");
//   const humidity = document.getElementById("humidity");

//   //clear all the previous content in the html
//   displayCity.innerHTML = "";
//   temperature.innerHTML = "";
//   wind.innerHTML = "";
//   humidity.innerHTML = "";

//   const cityName = data.name;
//   const currentTemp = Math.round(data.main.temp);
//   const windSpeed = Match.round(data.main.wind.speed);
// }

// // Fetch Weather data from the API for the city
// function fetchWeather() {
//   const city = document.getElementById("search-input").value;
//   //check if input is empty
//   //if (!city) {
//   // alert("Please enter a city");
//   // return;
// }

// console.log(searchValue);
// const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${apiKey}&units=metric`;

// fetch(currentWeatherUrl)
//   .then((response) => response.json())
//   .then((data) => displayWeather(data))
//   .catch((error) => {
//     console.error("Error fetching current weather data:", error);
//     // alert("Error fetching current data, Please try again");
//   });

// // Call the fetchWeather function after getting the input value
// fetchWeather();

//Frist : when submit  the  should appear in the page  the city along with temp, winds speed, hum and date + 5 days forecast and name of the city to be stored in a history list.

console.log("123");

// create submit event lister for the form
//
// on submit you should:
// - get the value of the search input (city nane)
// - call the API to get the weather data for today
// - display the weather data to the user
// - call the API to get the forecast (you might need to call the geolocation API before doing this)
// - show the forecast data to the user
// - save the city name in the localstorage (it should be an array of strings)
// - display the city name as first element of the searched list
//
// when the app is loaded we need to get the list of searched cities from the local storage and show them
// when the user clicks one of the cities in the list you should trigger the submit event with the city selected
