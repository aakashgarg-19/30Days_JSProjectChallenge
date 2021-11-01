// Varibales
const secHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

// Funtion
const setClock = function () {
  const now = new Date(); // Taking system Date and Time

  const second = now.getSeconds(); // Getting current second
  const minn = now.getMinutes(); // Getting current minutes
  const hour = now.getHours(); // Getting current hour

  // For Removing transition glitch when occur when second hand hits 60th Second
  // You can play with it, by commenting it out
  if (second === 0) secHand.style.transition = "none";
  else if (second === 1) {
    secHand.style.transition = "all 0.5s";
    secHand.style.transitionTimingFunction = "cubic-bezier(0, 2.49, 0.58, 1)";
  }

  // Calcuation of function
  const secHandAngle = second * 6 + 90;
  const minHandAngle = minn * 6 + 90;
  const hourHandAngle = hour * 30 + 90;

  // Adding Transition
  secHand.style.transform = `rotate(${secHandAngle}deg)`;
  minHand.style.transform = `rotate(${minHandAngle}deg)`;
  hourHand.style.transform = `rotate(${hourHandAngle}deg)`;
};

// Main

setInterval(setClock, 1000); //Callback funtion to run setClock function every Second
