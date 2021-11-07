// Variables
let centers = [];
const cards = document.querySelector(".cards");
const searchBtn = document.querySelector(".srcBtn");
const dateIn = document.querySelector("#dateIn");
const input = document.querySelector("#input");

// Fetching todays date
let today, d, m, y;
today = new Date();
d = today.getDate();
m = today.getMonth() + 1;
y = today.getFullYear();
if (m < 10) m = `0${m}`;
if (d < 10) d = `0${d}`;
dateIn.setAttribute("value", `${y}-${m}-${d}`);

// Fetching Date
async function cowinData(pincode, datee) {
  let url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${datee}`;
  const xhr = await fetch(url);
  // Checking status
  if (xhr.status === 200) {
    let data = await xhr.json();
    // Checking for no input
    if (data.sessions !== []) {
      data.sessions.map((e, i) => {
        let centerInfo = [
          e.name,
          e.address,
          e.vaccine,
          e.date,
          e.min_age_limit,
          e.available_capacity,
          e.block_name,
          e.district_name,
          e.slots,
        ];
        centers.push(centerInfo);
        // Making HTML of cards
        let code = `
      <div class="card">
      <h1>
      <span class="category">Center Name - </span>
      ${centers[i][0]}
    </h1>
    <div class="innerCard">
    <h3>
    <span class="category">Center Address - </span>
    ${centers[i][1]}
  </h3>
  <h3>
    <span class="category">Vaccine Name - </span>
    ${centers[i][2]}
  </h3>
  <h3>
    <span class="category">Date Of Vaccination - </span>
    ${centers[i][3]}
  </h3>
  <h3>
    <span class="category">Minimum Age Limit - </span>
    ${centers[i][4]}
  </h3>
  <h3>
    <span class="category">Available Capacity - </span>
    ${centers[i][5]}
  </h3>
  <h3>
    <span class="category">Block Name - </span>
    ${centers[i][6]}
  </h3>
  <h3>
    <span class="category">District Name - </span>
    ${centers[i][7]}
  </h3>
  <h3>
    <span class="category">Available Slots - </span>
     ${centers[i][8].join(" | ")}
  </h3>
    </div>
    </div>`;
        cards.innerHTML += code;
      });
      if (data.sessions.length === 0) {
        alert("No Vaccinations Available");
      }
      centers = [];
    }
  } else {
    alert("Some error occured");
  }
}

const to_do = function () {
  let pincode = input.value;
  let datee = dateIn.value;
  // prettier-ignore
  datee = `${datee.substring(8, 10)}-${datee.substring(5, 7)}-${datee.substring(0,4)}`;
  input.value = "";
  cards.innerHTML = "";
  if (pincode === "") {
    alert("Enter pincode in the search box");
  } else if (pincode !== "") {
    cowinData(pincode, datee);
  }
};

// For submitting request when we press ENTER
input.addEventListener("keypress", (e) => {
  if (e.which === 13) {
    to_do();
  }
});

// For submitting request when we press button
searchBtn.addEventListener("click", () => {
  to_do();
});
