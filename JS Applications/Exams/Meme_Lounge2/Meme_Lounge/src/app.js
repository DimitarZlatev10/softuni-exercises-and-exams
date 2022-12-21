import { logout } from "./api/data.js";
import { page, render } from "./libs.js";
import { catalogPage } from "./views/catalog.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { loginPage } from "./views/login.js";
import { profilePage } from "./views/profile.js";
import { registerPage } from "./views/register.js";
import { welcomePage } from "./views/welcome.js";

document.getElementById("logoutBtn").addEventListener("click", onLogout);
const root = document.querySelector("main");

page(decorateContext);
page("/", welcomePage);
page("/login", loginPage);
page("/register", registerPage);
page("/catalog", catalogPage);
page("/create", createPage);
page("/details/:id", detailsPage);
page("/edit/:id", editPage);
page("/profile", profilePage);

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
    document.querySelector(".user").style.display = "block";
    document.querySelector(".guest").style.display = "none";
    document.querySelector(
      "nav span"
    ).textContent = `Welcome ${userData.email}`;
  } else {
    document.querySelector(".user").style.display = "none";
    document.querySelector(".guest").style.display = "block";
  }
}
