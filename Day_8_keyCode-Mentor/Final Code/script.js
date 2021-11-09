const kyCode = document.querySelector(".keyCode");
const btn = document.querySelector(".btn");

document.addEventListener("keydown", function (e) {
  kyCode.textContent = e.keyCode;
  if (e.key == "Unidentified" || e.key == " ") btn.textContent = e.code;
  else if (e.key.length == 1) btn.textContent = `Key - ${e.key}`;
  else btn.textContent = e.key;
});
