// Free API of Countries and States
const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

// Fetching cities from API
let cities = [];
async function getCities() {
  const data = await fetch(endpoint);
  cities.push(...(await data.json()));
}
getCities();

function findMatches(wordToMatch) {
  return cities.filter((place) => {
    // Here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, "gi"); // To find an expression in String
    return place.city.match(regex) || place.state.match(regex);
  });
}

// Here we will display Filtered cities
function displayMatches() {
  const matchArray = findMatches(this.value);
  const html = matchArray
    .map((place) => {
      // For Highlighting Searched Word
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );

      // For making HTML of required cities
      return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
      </li>
    `;
    })
    // For joining HTML
    .join("");
  suggestions.innerHTML = html;
}

// Eventlistener for search bar
searchInput.addEventListener("keyup", displayMatches);
