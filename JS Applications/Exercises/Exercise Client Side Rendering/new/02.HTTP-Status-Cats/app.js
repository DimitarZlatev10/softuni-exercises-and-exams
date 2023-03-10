import { html, render } from "./node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";

const root = document.getElementById("allCats");

const catsTemplate = (cats) => html` <ul>
  ${cats.map(
    (c) => html`<li>
      <img
        src="./images/${c.imageLocation}.jpg"
        width="250"
        height="250"
        alt="Card image cap"
      />
      <div class="info">
        <button class="showBtn">Show status code</button>
        <div class="status" style="display: none" id="${c.id}">
          <h4>Status Code: ${c.statusCode}</h4>
          <p>${c.statusMessage}</p>
        </div>
      </div>
    </li>`
  )}
</ul>`;

render(catsTemplate(cats),root)

root.addEventListener('click',(event)=>{
    if(event.target.tagName =='BUTTON'){
        if(event.target.parentElement.querySelector('.status').style.display == 'none'){
            event.target.parentElement.querySelector('.status').style.display = 'block'
            event.target.textContent = 'Hide status code'
        }else{
            event.target.parentElement.querySelector('.status').style.display = 'none'
            event.target.textContent = 'Hide status code'
        }
    }
})

