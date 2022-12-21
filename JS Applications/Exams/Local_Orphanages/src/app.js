import { logout } from "./api/data.js";
import { page, render } from "./libs.js";
import { createPage } from "./views/create.js";
import { dashboardPage } from "./views/dashboard.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { loginPage } from "./views/login.js";
import { myPostsPage } from "./views/my-posts.js";
import { registerPage } from "./views/register.js";

document.getElementById("logoutBtn").addEventListener("click", onLogout);
const root = document.getElementById("main-content");

page(decorateContext);
page("/", dashboardPage);
page("/login", loginPage);
page("/register", registerPage);
page("/create", createPage);
page("/details/:id", detailsPage);
page("/edit/:id", editPage);
page("/my-posts", myPostsPage);

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
  if (userData != null) {
    document.getElementById("user").style.display = "block";
    document.getElementById("guest").style.display = "none";
  } else {
    document.getElementById("user").style.display = "none";
    document.getElementById("guest").style.display = "block";
  }
}
