import { register } from "../api/data.js";
import { updateNav } from "../app.js";
import { showSection } from "../dom.js";
import { showHomePage } from "./home.js";

const section = document.getElementById("registerPage");
const form = section.querySelector("form");
form.addEventListener("submit", onRegister);
section.remove();

export function showRegisterPage() {
  showSection(section);
}

async function onRegister(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const email = formData.get("email").trim();
  const password = formData.get("password").trim();
  const repass = formData.get("repeatPassword").trim();
  if (password != repass) {
    alert("Passwords don't match!");
    return;
  }
  if (email.length < 3) {
    alert("Email should be at least 3 characters long");
    return;
  }
  if (password.length < 3) {
    alert("Password should be at least 3 characters long");
    return;
  }
  await register(email, password);
  form.reset();
  showHomePage();
  updateNav();
}
