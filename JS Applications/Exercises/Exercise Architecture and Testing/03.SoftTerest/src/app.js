import * as api from "./api/data.js";
import { showCatalogPage } from "./views/catalog.js";
import { showCreatePage } from "./views/create.js";
import { showCreatedPage } from "./views/created.js";
import { showHomePage } from "./views/home.js";
import { showLoginPage } from "./views/login.js";
import { showRegisterPage } from "./views/register.js";


const nav = document.querySelector("nav");
nav.addEventListener("click", onNavigate);
document.getElementById("logoutBtn").addEventListener("click", onLogout);

updateNav();
showHomePage();

const links = {
  homeLink: showHomePage,
  registerLink: showRegisterPage,
  loginLink: showLoginPage,
  catalogLink: showCatalogPage,
  createLink: showCreatePage,
};

function onNavigate(event) {
  event.preventDefault();
  const view = links[event.target.id];
  if (typeof view == "function") {
    view();
  }
}

export function updateNav() {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  if (userData != null) {
    [...nav.querySelectorAll(".user")].forEach(
      (s) => (s.style.display = "block")
    ),
      [...nav.querySelectorAll(".guest")].forEach(
        (s) => (s.style.display = "none")
      );
  } else {
    [...nav.querySelectorAll(".user")].forEach(
      (s) => (s.style.display = "none")
    ),
      [...nav.querySelectorAll(".guest")].forEach(
        (s) => (s.style.display = "block")
      );
  }
}
async function onLogout() {
 await api.logout();
  updateNav();
  showHomePage();
}
