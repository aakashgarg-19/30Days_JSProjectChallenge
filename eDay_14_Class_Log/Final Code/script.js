/* ===== DOM Elements =====*/
const studentForm = document.getElementById("studentForm");
const studentsContainer = document.querySelector(".students");
const nameInput = studentForm["name"];
const ageInput = studentForm["age"];
const rollInput = studentForm["roll"];

/*====== Utility Functions  =====*/

// To add student from FORM
const addStudent = (name, age, roll) => {
  students.push({
    name,
    age,
    roll,
  });

  // Sending data to LocalStorage
  localStorage.setItem("students", JSON.stringify(students));

  return { name, age, roll };
};

// Render function
const createStudentElement = ({ name, age, roll }) => {
  // Create elements
  const studentDiv = document.createElement("div");
  const studentName = document.createElement("h2");
  const studentAge = document.createElement("p");
  const studentRoll = document.createElement("p");

  // Fill the content
  studentName.innerText = "Student name: " + name;
  studentAge.innerText = "Student age: " + age;
  studentRoll.innerText = "Student roll: " + roll;

  // Add to the DOM
  studentDiv.append(studentName, studentAge, studentRoll);
  studentsContainer.appendChild(studentDiv);

  // Removing student's Div when its empty
  studentsContainer.style.display = students.length === 0 ? "none" : "flex";
};

/*====== Event Listener ======*/

// Fetching data from FORM
studentForm.onsubmit = (e) => {
  e.preventDefault();

  const newStudent = addStudent(
    nameInput.value,
    ageInput.value,
    rollInput.value
  );

  createStudentElement(newStudent);

  nameInput.value = "";
  ageInput.value = "";
  rollInput.value = "";
};

function clearF() {
  localStorage.clear();
  students.clear;
  studentsContainer.innerHTML = "";
  studentsContainer.style.display = "none";
}

/* ====== MAIN ======*/

// Fetching data from LocalStorage
const students = JSON.parse(localStorage.getItem("students")) || [];

// Removing student's Div when its empty
studentsContainer.style.display = students.length === 0 ? "none" : "flex";

// Rendering data into  HTML
students.forEach(createStudentElement);
