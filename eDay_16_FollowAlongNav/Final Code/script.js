// DOM Element
const triggers = document.querySelectorAll("a");
const highlight = document.querySelector(".highlight");

function highlightLink() {
  // Getting coords
  const linkCoords = this.getBoundingClientRect();

  // Coordinate Object
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };

  // Setting highlight property
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

// Adding Eventlistener
triggers.forEach((a) => a.addEventListener("mouseenter", highlightLink));
