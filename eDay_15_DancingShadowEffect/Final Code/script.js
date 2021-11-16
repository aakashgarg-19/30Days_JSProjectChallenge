// DOM Elements
const box = document.querySelector(".box");
const text = box.querySelector("h1");

// Variables/Constants
const walk = 25;

// Main function
function moveShadow(e) {
  // Extraction Width and Height of Box,Position of pointer
  const width = box.offsetWidth;
  const height = box.offsetHeight;
  let { offsetX: x, offsetY: y } = e;

  // this = box element
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  // Walk calcution
  const xWalk = Math.round((x / width) * walk - walk / 2) * -1;
  const yWalk = Math.round((y / height) * walk - walk / 2) * -1;

  text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(128, 128, 128, 0.7)
    `;
}

// Event Listener
box.addEventListener("mousemove", moveShadow);
