/*⏰Feature #1: In your project, display the current date and time using JavaScript: Tuesday 16:00*/
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Satuday"
];
let day = days[now.getDay()];
let time = now.getHours() + ":" + now.getMinutes();
let currentDayTime = document.querySelector("#currentDayTime");
currentDayTime.innerHTML = `${day} ${time}`;
//https://phoenixnap.com/kb/how-to-get-the-current-date-and-time-javascript

/*🕵️‍♀️Feature #2: Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.*/
function changeCity(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#cityName");
  let cityInput = document.querySelector("#searchQuery");
  cityElement.innerHTML = cityInput.value;
}

let searchForm = document.querySelector("#searchForCity");
searchForm.addEventListener("submit", changeCity);

//let cityInput = document.querySelector(#city-input);

//let searchForm = document.querySelector("#searchForCity");

//cityElement.innerHTML = searchForm.value;
