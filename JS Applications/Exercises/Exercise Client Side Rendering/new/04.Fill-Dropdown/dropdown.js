import { html, render } from "./node_modules/lit-html/lit-html.js";

const form = document.querySelector("form");
form.addEventListener("submit", onSubmit);
const root = document.querySelector("div");

const optionsTemplate = (item) => html` <select id="menu">
  ${item.map((i) => html`<option .value=${i._id}>${i.text}</option>`)}
</select>`;
loadData();

async function loadData() {
  const res = await fetch("http://localhost:3030/jsonstore/advanced/dropdown");
  const data = await res.json();
  const result = Object.values(data);

  update(result);
}

async function onSubmit(event) {
  event.preventDefault();
  let text = document.getElementById("itemText").value;
  const res = await fetch("http://localhost:3030/jsonstore/advanced/dropdown", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  form.reset();
  if (res.ok == true) {
    loadData();
  }
}

function update(items) {
  const result = optionsTemplate(items);
  render(result, root);
}
