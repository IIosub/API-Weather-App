const apiKey = "f3e51c69dcc0d385851ded2f71199df2"; // API Key
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]; // An array with days of the week

function displayWeather(data) {
  const displayCity = document.getElementById("city");
  const temperature = document.getElementById("temp");
  const wind = document.getElementById("wind");
  const humidity = document.getElementById("humidity");

  //clear all the previous content in the html
  displayCity.innerHTML = "";
  temperature.innerHTML = "";
  wind.innerHTML = "";
  humidity.innerHTML = "";
}

// Fetch Weather data from the API for the city
function fetchWeather() {
  const city = document.getElementById("search-input").value;
  //check if input is empty
  if (!city) {
    alert("Please enter a city");
    return;
  }
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(currentWeatherUrl)
    .then((response) => response.json())
    .then((data) => displayWeather(data))
    .catch((error) => {
      console.error("Error fetching current weather data:", error);
      alert("Error fetching current data, Please try again");
    });
}

// Call the fetchWeather function after getting the input value
fetchWeather();
