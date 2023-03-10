import { showHome } from "./home.js";
import { showLogin } from "./login.js";
import { showRegister } from "./register.js";
import { showCreate } from "./create.js";
import { showDetails } from "./details.js";
import { showEdit } from "./edit.js";

const views = {
  homeLink: showHome,
  loginLink: showLogin,
  registerLink: showRegister,
};
document.getElementById("logoutBtn").addEventListener("click", onLogout);
const nav = document.querySelector("nav");
nav.addEventListener("click", (event) => {
  const view = views[event.target.id];
  if (typeof view == "function") {
    event.preventDefault();
    view();
  }
});
updateNav();
showHome();

export function updateNav() {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  if (userData != null) {
    nav.querySelector("#welcomeMsg").textContent = `Welcome, ${userData.email}`;
    [...nav.querySelectorAll(".user")].forEach(
      (s) => (s.style.display = "block")
    );
    [...nav.querySelectorAll(".guest")].forEach(
      (s) => (s.style.display = "none")
    );
  } else {
    [...nav.querySelectorAll(".user")].forEach(
      (s) => (s.style.display = "none")
    );
    [...nav.querySelectorAll(".guest")].forEach(
      (s) => (s.style.display = "block")
    );
  }
}

async function onLogout(event) {
  event.preventDefault();
  event.stopImmediatePropagation();

  const { token } = JSON.parse(sessionStorage.getItem("userData"));

  await fetch("http://localhost:3030/users/logout", {
    headers: {
      "X-Authorization": token,
    },
  });
  sessionStorage.removeItem("userData");
  updateNav();
  showLogin();
}
