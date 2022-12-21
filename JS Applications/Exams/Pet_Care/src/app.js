import { logout } from "./api/data.js";
import { page, render } from "./libs.js";
import { createPage } from "./views/create.js";
import { dashboardPage } from "./views/dashboard.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";

document.getElementById("logoutBtn").addEventListener("click", onLogout);
const root = document.getElementById("content");

page(decorateContext);
page("/", homePage);
page("/dashboard", dashboardPage);
page("/login", loginPage);
page("/register", registerPage);
page("/create", createPage);
page("/details/:id", detailsPage);
page("/edit/:id", editPage);

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
      (s) => (s.style.display = "block")
    ),
      [...document.querySelectorAll(".guest")].forEach(
        (s) => (s.style.display = "none")
      );
  } else {
    [...document.querySelectorAll(".user")].forEach(
      (s) => (s.style.display = "none")
    ),
      [...document.querySelectorAll(".guest")].forEach(
        (s) => (s.style.display = "block")
      );
  }
}
