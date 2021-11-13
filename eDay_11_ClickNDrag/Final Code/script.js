// Varibale and Flag
const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

// To make sliding area active to slide
slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

// To slide area when mouse is moved
slider.addEventListener("mousemove", (e) => {
  // When left key is not pressed break the function execution
  if (!isDown) return;

  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});

// To toggle isDown to stop sliding
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
