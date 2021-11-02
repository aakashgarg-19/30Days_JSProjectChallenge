/* Varibales */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const fullScreen = document.querySelector(".fullScreen");

/* Build out functions */

function togglePlay() {
  if (video.paused) video.play();
  else video.pause();
}

function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚"; // Ternary Operator
  toggle.textContent = icon;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`; // flexBasis is CSS property
}

function skip() {
  // parseFloat function used to convert String to Float
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function openFullscreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    /* Safari */
    video.webkitRequestFullscreen();
  }
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

/* Hook up the event listeners */

video.addEventListener("click", togglePlay); // For Click Play/Pause on Video
toggle.addEventListener("click", togglePlay); // For Click Play/Pause on Button

video.addEventListener("play", updateButton); // Updating Play/Pause button
video.addEventListener("pause", updateButton); // Updating Play/Pause button

video.addEventListener("timeupdate", handleProgress); // For Updating Video progress

skipButtons.forEach((button) => button.addEventListener("click", skip)); // Skip buttons

ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate)); // Handling changes in Sliding bars

fullScreen.addEventListener("click", openFullscreen); // For fullScreen

// For Sliding Video Progress bar  [Laggy Sliding]  ---> For beginner
progress.addEventListener("click", scrub);

// For Sliding Video Progress bar  [Smooth Sliding]   ---> For Intermidiate because little bit tricky
let mousedown = false;
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
progress.addEventListener("mousemove", (e) => {
  if (mousedown) scrub(e);
});
