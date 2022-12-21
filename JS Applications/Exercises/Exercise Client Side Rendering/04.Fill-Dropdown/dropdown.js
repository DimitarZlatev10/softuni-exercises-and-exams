import { html, render } from "./node_modules/lit-html/lit-html.js";

document.querySelector("form").addEventListener("submit", postItem);
const div = document.querySelector("div");
const selectTemplate = (items) => html` 
<select id="menu">
${items.map((i) => html`<option value=${i._id}>${i.text}</option>`)}
</select>`;

getData();

async function getData() {
  const res = await fetch("http://localhost:3030/jsonstore/advanced/dropdown");
  const data = await res.json();

  update(Object.values(data));
}

function update(items) {
  const result = selectTemplate(items);
  render(result, div);
}

async function postItem(event) {
  event.preventDefault();
  const text = document.getElementById("itemText").value;

  const res = await fetch("http://localhost:3030/jsonstore/advanced/dropdown", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  if (res.ok) {
    getData();
  }
}
