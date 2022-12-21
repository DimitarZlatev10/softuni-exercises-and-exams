import { getAllIdeas } from "../api/data.js";
import { showSection } from "../dom.js";
import { showCreatedPage } from "./created.js";

const section = document.getElementById("dashboard-holder");
section.addEventListener("click", onDetails);
section.remove();

export function showCatalogPage(event) {
  showSection(section);
  loadAllIdeas();
  if (event != undefined) {
    event.preventDefault();
  }
}

async function loadAllIdeas() {
  section.replaceChildren(
    (document.createElement("p").textContent = "Loading...")
  );
  const ideas = await getAllIdeas();
  const fragment = document.createDocumentFragment();

  ideas.map(createIdeasCard).forEach((i) => fragment.appendChild(i));

  section.replaceChildren(fragment);
}

function createIdeasCard(ideas) {
  const divElement = document.createElement("div");
  divElement.className = "card overflow-hidden current-card details";
  divElement.style.width = "20rem";
  divElement.style.height = "18rem";
  divElement.innerHTML = `
  <div class="card-body">
                <p class="card-text">${ideas.title}</p>
            </div>
            <img class="card-image" src="${ideas.img}" alt="Card image cap">
            <a data-id="${ideas._id}" class="btn" href="">Details</a>
  `;
  return divElement;
}

function onDetails(event) {
  if (event.target.tagName === "A") {
    const id = event.target.dataset.id;
    event.preventDefault();
    showCreatedPage(id);
  }
}
