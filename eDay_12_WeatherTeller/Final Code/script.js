// API Key
const apikey = "3265874a2c77ae4a04bb96236a642d2f";

// Variables
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const url = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

// Fetching API
async function getWeatherByLocation(city) {
  try {
    const resp = await fetch(url(city), { origin: "cors" });
    const respData = await resp.json();
    addWeatherToPage(respData);
  } catch (err) {
    alert("Failed to fetch : Please check Input or Internet Connection");
  }
}

// Function to render data into HTML
function addWeatherToPage(data) {
  const temp = Math.floor(data.main.temp - 273.15);
  const weather = document.createElement("div");
  // console.log(data.name);
  weather.classList.add("weather");
  weather.innerHTML = `
  <small>${data.name}</small><h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
        <small>${data.weather[0].main}</small>
    `;

  // cleanup
  main.innerHTML = "";

  main.appendChild(weather);
}

// Event linstener for search box
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = search.value;

  if (city) {
    main.innerHTML = "";
    search.value = "";
    getWeatherByLocation(city);
  }
});
