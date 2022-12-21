import { html, render } from "./node_modules/lit-html/lit-html.js";

const input = document.getElementById("towns");
const root = document.getElementById("root");
const form = document
  .querySelector("form")
  .addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const towns = input.value.trim().split(',')
  render(townsTemplate(towns),root)
  
}

const townsTemplate = (towns) => html` <ul>
  ${towns.map((t) => html`<li>${t}</li>`)}
</ul>`;

