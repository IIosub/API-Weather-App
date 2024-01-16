const apiKey = "f3e51c69dcc0d385851ded2f71199df2"; // API Key

//Create a function so when the city is submited the value would be stored in a variabl

function getValue(e) {
  e.preventDefault();
  const inputValue = document.getElementById("search-input").value;
  const lowerCaseValue = inputValue.toLowerCase();
  console.log(lowerCaseValue);
}

document.querySelector("form").addEventListener("submit", getValue);
