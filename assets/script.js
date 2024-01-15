const apiKey = "f3e51c69dcc0d385851ded2f71199df2"; //API Key
const defaultCity = "London"; // First City Displayed

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]; // An array with days of the week

const url = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${apiKey}&units=metric`;

function randerWeather() {}

//Fetch Weather data from the api for the city
function fetchWeather(query) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

fetchWeather();
