import { html, render } from "./node_modules/lit-html/lit-html.js";
import { towns as townData } from "./towns.js";

const root = document.getElementById("towns");
const input = document.getElementById("searchText");
const result = document.getElementById("result");

const towns = townData.map((t) => ({ name: t, match: false }));

const townsTemplate = (towns) => html` <ul>
  ${towns.map((t) => html`<li class=${t.match ? "active" : ""}>${t.name}</li>`)}
</ul>`;

update()
document.querySelector("button").addEventListener("click", onSubmit);

function onSubmit(event) {
  const match = input.value.trim().toLocaleLowerCase();
  let matches = 0;
  for (const town of towns) {
    if (match && town.name.toLocaleLowerCase().includes(match)) {
      town.match = true;
      matches++;
    } else {
      town.match = false;
    }
  }
  result.textContent = `${matches} matches found!`;
  update();
}

function update() {
  render(townsTemplate(towns), root);
}