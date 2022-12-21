import { showSection } from "../dom.js";
import { login } from "../api/data.js";
import { showHomePage } from "./home.js";
import { updateNav } from "../app.js";

const section = document.getElementById("loginPage");
const form = section.querySelector("form");
form.addEventListener("submit", onLogin);
section.remove();

export function showLoginPage() {
  showSection(section);
}

async function onLogin(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const email = formData.get("email").trim();
  const password = formData.get("password").trim();
  await login(email, password);
  form.reset();
  showHomePage();
  updateNav();
}
