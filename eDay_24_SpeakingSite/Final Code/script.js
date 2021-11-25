// DOM Elements and Variables
const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");

// Setting text msg Element
msg.text = document.querySelector('[name="text"]').value;

// Utility function for Event Listeners
function populateVoices() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    .filter((voice) => voice.lang.includes("en"))
    .map(
      (voice) =>
        `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
    )
    .join("");
}

function setOption() {
  msg[this.name] = this.value;
  toggle();
}

function setVoice() {
  msg.voice = voices.find((voice) => voice.name === this.value);
  toggle();
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

/* Event Listeners */
// To Populate and Change Voices
speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", setVoice);
// To change setting and Start speaking
options.forEach((option) => option.addEventListener("change", setOption));
// For Buttons
speakButton.addEventListener("click", toggle);
stopButton.addEventListener("click", () => toggle(false));
