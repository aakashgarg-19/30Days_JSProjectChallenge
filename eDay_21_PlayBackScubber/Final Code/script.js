// DOM elements and Variables
const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");
let percent = 0.166;

// Function to handle keyPress
function handleKeyPress(e) {
  if (e.key == "ArrowDown") {
    if (percent >= 0.04) percent = percent - 0.01;
    handlePer(percent);
  } else if (e.key == "ArrowUp") {
    if (percent <= 1) percent = percent + 0.01;
    handlePer(percent);
  }
  video.volume = 0.5;
}

// Utility function to handle percentage of Video Playback
function handlePer(percent) {
  const min = 0.4;
  const max = 4;
  const height = Math.round(percent * 100) + "%";
  const playbackRate = percent * (max - min) + min;
  bar.style.width = height;
  bar.textContent = playbackRate.toFixed(2) + "×";
  video.playbackRate = playbackRate;
}
handlePer(percent);

// Evemt Listener
document.addEventListener("keydown", handleKeyPress);
