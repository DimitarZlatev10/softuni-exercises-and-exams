import { html, render } from "./node_modules/lit-html/lit-html.js";

const root = document.querySelector("tbody");
const input = document.getElementById("searchField");
document.getElementById("searchBtn").addEventListener("click", onClick);

const studentsTemplate = (student) =>
  html` ${student.map(
    (s) => html`<tr class=${s.match ? "select" : ""}>
      <td>${s.info.firstName} ${s.info.lastName}</td>
      <td>${s.info.email}</td>
      <td>${s.info.course}</td>
    </tr>`
  )}`;

let students;

loadData();

async function loadData() {
  const res = await fetch("http://localhost:3030/jsonstore/advanced/table");
  const data = await res.json();
  students = Object.values(data).map((s) => ({ info: s, match: false }));

  update();
}

function onClick() {
  const match = input.value.trim().toLocaleLowerCase();
  for (const student of students) {
    student.match = Object.values(student.info).some(
      (v) => match && v.toLocaleLowerCase().includes(match)
    );
  }
  update();
}

function update() {
  const result = studentsTemplate(students);
  render(result, root);
}
