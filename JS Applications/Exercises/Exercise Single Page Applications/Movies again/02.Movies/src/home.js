import { showCreate } from "./create.js";
import { showDetails } from "./details.js";
import { showView } from "./dom.js";

document.getElementById("homeBtn").addEventListener("click", showHome);
const section = document.getElementById("home-page");
const movieSection = document.querySelector(
  ".card-deck.d-flex.justify-content-center"
);
movieSection.addEventListener("click", (event) => {
  event.preventDefault();
  let target = event.target;
  if (target.tagName == "BUTTON") {
    target = target.parentElement;
  }
  if (target.tagName == "A") {
    let id = target.id;
    console.log(id);
    showDetails(id);
  }
});
section.querySelector("#addBtn").addEventListener("click", (event)=>{
    event.preventDefault()
    showCreate()
});
section.remove();

export function showHome() {
  showView(section);
  addButton();
  getMovies();
}

async function getMovies() {
  movieSection.replaceChildren(
    (document.createElement("p").textContent = "Loading...")
  );
  const res = await fetch("http://localhost:3030/data/movies");
  const data = await res.json();

  movieSection.replaceChildren(...data.map(createMovieCard));
}

function createMovieCard(movie) {
  const divElement = document.createElement("div");
  divElement.className = `card mb-4`;
  divElement.innerHTML = `
<img class="card-img-top" src="${movie.img}" alt="Card image cap" width="400" />
<div class="card-body">
<h4 class="card-title">${movie.title}</h4>
</div>
<div class="card-footer">
<a id="${movie._id}" href="#">
  <button type="button" class="btn btn-info">
    Details
  </button>
</a>
</div>`;

  return divElement;
}

function addButton() {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  if (userData != null) {
    document.getElementById("add-movie-button").style.display = "block";
  } else {
    document.getElementById("add-movie-button").style.display = "none";
  }
}


