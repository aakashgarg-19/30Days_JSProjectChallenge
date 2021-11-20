// DOM Element
const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
let items = JSON.parse(localStorage.getItem("items")) || [];

// Adding Item
function addItem(e) {
  e.preventDefault();
  // Fetching value from FORM
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };
  // Pushing item in Item array
  items.push(item);
  // Rendering Items
  populateList(items, itemsList);
  // Pushing Item inside LocalStorage
  localStorage.setItem("items", JSON.stringify(items));
  // Reset form
  this.reset();
}

// Rendering Items
function populateList(plates = [], platesList) {
  // Added HTML
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? "checked" : ""
      } />
          <label for="item${i}">${plate.text}</label>
        </li>
      `;
    })
    .join("");
}

function toggleDone(e) {
  // Skip this unless it's an input
  if (!e.target.matches("input")) return;
  // For target Input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

// For Clearing LocalStorage
function clearField() {
  localStorage.clear();
  items = [];
  populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);

populateList(items, itemsList);
