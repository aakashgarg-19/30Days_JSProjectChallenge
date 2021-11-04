// This line is used to add a kind of Event listener to our Page

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// This line is used to make SpeechRecognition Varirable

const recognition = new SpeechRecognition();

// Setting properties of recognition Variable

recognition.interimResults = true;
recognition.lang = "en-US";

// Making Element Variable, which are meant to be at Runtime

let p = document.createElement("p");
let img = document.createElement("img");

const words = document.querySelector(".words");

// Element(HTML tag) added at Runtime

words.appendChild(p);

/*Adding Event listener to Speech Recognition Variable. 
This event listner will be triggered when it  will get a result*/

recognition.addEventListener("result", (e) => {
  // Use this see what kind of event it will emit
  // console.log(e);

  // Transcript is the string of Words we will speak
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  // Making First letter Upper case and adding it to HTML
  p.textContent =
    transcript[0].toUpperCase() + transcript.substring(1, transcript.length);

  // Adding Happy Diwali Image
  if (transcript.includes("Diwali")) {
    words.appendChild(img);
    document.querySelector("img").setAttribute("src", "download.jpg");
  }

  // To add new paragraph when we pause
  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  }
});

// To reStart writting new paragraph
recognition.addEventListener("end", recognition.start);

// Start Speech Recognition
// recognition.start();
