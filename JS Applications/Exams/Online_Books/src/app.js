import { logout } from "./api/data.js";
import { render, page } from "./libs.js";
import { createPage } from "./views/create.js";
import { dashboardPage } from "./views/dashboard.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { loginPage } from "./views/login.js";
import { myBooksPage } from "./views/mybooks.js";
import { registerPage } from "./views/register.js";

document.getElementById("logoutBtn").addEventListener("click", onLogout);
const root = document.getElementById("site-content");

page(decorateContext);
page("/", dashboardPage);
page("/login", loginPage);
page("/register", registerPage);
page("/details/:id", detailsPage);
page("/create", createPage);
page("/edit/:id", editPage);
page("/my-books", myBooksPage);

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
    document.querySelector(
      "#user span"
    ).textContent = `Welcome, ${userData.email}`;
    document.getElementById("guest").style.display = "none";
    document.getElementById("user").style.display = "block";
  } else {
    document.getElementById("guest").style.display = "block";
    document.getElementById("user").style.display = "none";
  }
}
