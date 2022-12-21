import { updateUserNav } from "./app.js";
import { showSection } from "./dom.js";
import { showLoginPage } from "./login.js";

const catalogSection = document.getElementById("catalogSection");
let catalogSectionUl = catalogSection.querySelector("ul");
catalogSection.remove();

export function showCatalogPage() {
  showSection(catalogSection);

  loadMovies();
}

async function loadMovies() {
  catalogSectionUl.replaceChildren(
    (document.createElement("p").textContent = `Loading...`)
  );

  const options = { method: "get", headers: {} };
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  if (userData != null) {
    options.headers["X-Authorization"] = userData.token;
  }

  const res = await fetch("http://localhost:3030/data/movies");

  if (res.status == 403) {
    sessionStorage.removeItem("userData");
    updateUserNav();
    showLoginPage();
  }
  const movies = await res.json();

  onReplace(movies);
}

function onReplace(movies) {
  let replace = [];
  movies.forEach((s) => {
    let li = document.createElement("li");
    li.textContent = s.title;
    replace.push(li);
  });
  catalogSectionUl.replaceChildren(...replace);
}
