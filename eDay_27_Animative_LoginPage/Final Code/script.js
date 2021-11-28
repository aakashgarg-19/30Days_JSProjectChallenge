const labels = document.querySelectorAll(".form-control label");
const form = document.querySelector("form");
const heading = document.querySelector("h1");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 20}ms">${letter}</span>`
    )
    .join("");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.reset();
  heading.textContent = "Successfull !!";
  heading.classList.add("glow");
});
