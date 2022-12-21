import { showView } from "./dom.js";
import { showCreate } from "./create.js";
import { showDetails } from "./details.js";

let section = document.getElementById("home-page");
let movieCatalog = section.querySelector(
  ".card-deck.d-flex.justify-content-center"
);

section.querySelector("#createLink").addEventListener("click", (event) => {
  event.preventDefault();
  showCreate();
});
section.addEventListener("click", (event) => {
  event.preventDefault();
  let target = event.target;
  if (target.tagName == "BUTTON") {
    target = target.parentElement;
  }
  if(target.tagName =='A'){
    const id = target.dataset.id
    console.log(id);
    showDetails(id)
  }
});
section.remove();

export function showHome() {
  showView(section);
  getMovies();
}

async function getMovies() {
  movieCatalog.replaceChildren(
    (document.createElement("p").textContent = "Loading...")
  );
  const res = await fetch("http://localhost:3030/data/movies");
  const data = await res.json();

  movieCatalog.replaceChildren(...data.map(createMovieCard));
}

function createMovieCard(movie) {
  const divElement = document.createElement("div");
  divElement.className = "card mb-4";
  divElement.innerHTML = `
  <img class="card-img-top" src="${movie.img}"
  alt="Card image cap" width="400">
<div class="card-body">
 <h4 class="card-title">${movie.title}</h4>
</div>
<div class="card-footer">
 <a data-id=${movie._id} href="#">
     <button type="button" class="btn btn-info">Details</button>
 </a>
</div>`;

  return divElement;
}
