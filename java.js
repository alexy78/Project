let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  kyiv: {
    temp: -5,
    humidity: 20,
  },
};

let h3 = document.querySelector("h3");
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
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
let currentYear = now.getFullYear();
let currentDay = days[now.getDay()];
let currentMonth = months[now.getMonth()];
let currentDate = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
h3.innerHTML = `Today is ${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}, ${hours}:${minutes}`;

function showTemperature(response) {
  let h2 = document.querySelector("h2");
  let temperature = Math.round(response.data.main.temp);
  let description = response.data.weather[0].description;
  let h1 = document.querySelector("h1");
  h2.innerHTML = `It is ${temperature} degrees, ${description}`;
  h1.innerHTML = ` ${response.data.name}`;
}
function toSubmit(event) {
  event.preventDefault();
  let cityinput = document.querySelector("#cityinput");
  searchForCity(cityinput.value);
}
let cityForm = document.querySelector("change-city");
cityForm = addEventListener("submit", toSubmit);
function searchForCity(city) {
  let apiKey = "be3ab8e09c2856ab67e7aa09558d9610";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
function handlePosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "be3ab8e09c2856ab67e7aa09558d9610";
  let apiUrlPosition = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
}
function showCurrentTemp(response) {
  let h2 = document.querySelector("h2");
  let temperature = Math.round(response.data.main.temp);
  let description = response.data.weather[0].description;
  let h1 = document.querySelector("h1");
  h2.innerHTML = `It is ${temperature} degrees, ${description}`;
  h1.innerHTML = ` ${response.data.name}`;
}
function clickTheButton() {
  navigator.geolocation.getCurrentPosition(handlePosition);
}
let button = document.querySelector("button");
button.addEventListener("click", clickTheButton);
