import { html, render } from "./node_modules/lit-html/lit-html.js";
import { towns as townNames } from "./towns.js";

const towns = townNames.map(t=> ({name:t , match:false}))
const textInput = document.getElementById("searchText");
const output = document.getElementById("result");
const div = document.getElementById("towns");
document.querySelector("button").addEventListener("click", onClick);


const listTemplate = (towns) => html` <ul>
  ${towns.map((t) => html`<li class=${t.match ? 'active' : ''}>${t.name}</li>`)}
</ul>`;

update();

function update() {
  render(listTemplate(towns), div);
}

function onClick() {
  const match = textInput.value.trim().toLocaleLowerCase()
  let matches = 0
  for (const town of towns) {
   if(match && town.name.toLocaleLowerCase().includes(match)){
       town.match = true
       matches++
   }else{
      town.match = false
   }
  }

  output.textContent = `${matches} matches found!`
  update()
}
