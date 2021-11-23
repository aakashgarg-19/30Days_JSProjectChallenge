const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
];

// Utility for Comparator
function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, "").trim();
}

// Utility function
function display(Bands, str, str1 = "") {
  document.querySelector("#bands").innerHTML =
    `<li class="${str}">${str + str1}</li>` +
    Bands.map((band) => `<li>${band}</li>`).join("");
}

// For Unsorting
function unsortN() {
  display(bands, "Unsorted");
}

// For Sorting Normally
function sortN() {
  const temp = [...bands];
  display(temp.sort(), "Sorted", " Normally !!");
}

// For Sorting With Comparator function
function sortWC() {
  const temp = [...bands];
  // comparator function
  display(
    temp.sort(function (a, b) {
      return strip(a) > strip(b) ? 1 : -1;
    }),
    "Sorted",
    " after neglecting starting Article(a/the/an) With Comparator !!"
  );
}

unsortN(); // Initially Unsorted
