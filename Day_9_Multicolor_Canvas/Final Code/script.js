// Variable
const canvas = document.querySelector("#draw");
// Making 2d Context over canvas
const ctx = canvas.getContext("2d");

// Setting Canvas Properties
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Setting Context Properties
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 50;

// Flags mousedown and mouseup event
let isDrawing = false;

let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e) {
  // Stop the funtion from running when they are not moused down
  if (!isDrawing) return;

  // Setting multicolour stroke
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  hue++;
  if (hue >= 360) {
    hue = 0;
  }

  // Drawing algorithm
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

/* EventListeners for various mouse events */
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
