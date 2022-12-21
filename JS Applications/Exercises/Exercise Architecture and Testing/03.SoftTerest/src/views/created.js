import { showSection } from "../dom.js";
import { deleteById, getAllIdeas, getById } from "../api/data.js";
import { showCatalogPage } from "./catalog.js";

const section = document.getElementById("createdPage");
section.remove();

export function showCreatedPage(id) {
  showSection(section);
  console.log(id);
  loadIdea(id);
}

async function loadIdea(id) {
  section.replaceChildren(
    (document.createElement("p").textContent = "Loading...")
  );
  const idea = await getById(id);

  section.replaceChildren(createIdea(idea));
}

function createIdea(idea) {
  const fragment = document.createDocumentFragment();
  const imgElement = document.createElement("img");
  imgElement.className = "det-img";
  imgElement.src = `${idea.img}`;
  const divElement = document.createElement("div");
  divElement.className = "desc";
  const h2Element = document.createElement("h2");
  h2Element.className = "display-5";
  h2Element.textContent = `${idea.title}`;
  const pDesc = document.createElement("p");
  pDesc.className = "infoType";
  pDesc.textContent = "Description:";
  const pIdea = document.createElement("p");
  pIdea.className = "idea-description";
  pIdea.textContent = `${idea.description}`;
  divElement.appendChild(h2Element);
  divElement.appendChild(pDesc);
  divElement.appendChild(pIdea);
  fragment.appendChild(imgElement);
  fragment.appendChild(divElement);

  const userData = JSON.parse(sessionStorage.getItem("userData"));
  if (userData && userData.id == idea._ownerId) {
    const deleteDiv = document.createElement("div");
    deleteDiv.className = "text-center";
    const deleteBtn = document.createElement("a");
    deleteBtn.className = "btn detb";
    deleteBtn.href = "";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", onDelete);
    deleteDiv.appendChild(deleteBtn);
    fragment.appendChild(deleteDiv);
  }

  return fragment;
  async function onDelete(event) {
    event.preventDefault();
    const confirmed = confirm("Are you sure you want to delete?");
    if (confirmed) {
      await deleteById(idea._id);
      showCatalogPage();
    }
  }
}
