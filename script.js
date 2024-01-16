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

const apiKey = "f3e51c69dcc0d385851ded2f71199df2"; // API Key

//Create a function so when the city is submited the value would be stored in a variabl

function getWeather(e) {
  e.preventDefault();
  const inputValue = document.getElementById("search-input").value;
  const lowerCaseValue = inputValue.toLowerCase();
  console.log(lowerCaseValue);
  //check if input is empty
  if (!lowerCaseValue) {
    alert("Please enter a city");
    return;
  }
}

document.querySelector("form").addEventListener("submit", getWeather);
