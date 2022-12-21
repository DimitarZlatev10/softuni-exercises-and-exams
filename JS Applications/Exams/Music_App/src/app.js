import { logout } from "./api/data.js";
import { render, page } from "./libs.js";
import { catalogPage } from "./views/catalog.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { searchPage } from "./views/search.js";

const root = document.getElementById("main-content");
document.getElementById("logoutBtn").addEventListener("click", onLogout);

page(decorateContext);
page("/", homePage);
page("/login", loginPage);
page("/register", registerPage);
page("/catalog", catalogPage);
page("/create", createPage);
page("/details/:id", detailsPage);
page("/edit/:id", editPage);
page("/search", searchPage);

updateUserNav();
page.start();

function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, root);
  ctx.updateUserNav = updateUserNav;

  next();
}

async function onLogout() {
  await logout();
  updateUserNav();
  page.redirect("/");
}

function updateUserNav() {
  const userData = JSON.parse(sessionStorage.getItem("userData"));

  if (userData) {
    [...document.querySelectorAll(".user")].forEach(
      (s) => (s.style.display = "inline-block")
    ),
      [...document.querySelectorAll(".guest")].forEach(
        (s) => (s.style.display = "none")
      );
  } else {
    [...document.querySelectorAll(".user")].forEach(
      (s) => (s.style.display = "none")
    ),
      [...document.querySelectorAll(".guest")].forEach(
        (s) => (s.style.display = "inline-block")
      );
  }
}
