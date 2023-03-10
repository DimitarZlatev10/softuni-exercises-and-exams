import { showSection } from "./dom.js";
import { showHomePage } from "./home.js";
import { updateUserNav } from "./app.js";

const registerSection = document.getElementById("registerSection");
registerSection.remove();
const form = registerSection.querySelector("form");
form.addEventListener("submit", onSubmit);

export function showRegisterPage() {
  showSection(registerSection);
}

async function onSubmit(event) {
  event.preventDefault();

  let formData = new FormData(form);
  let email = formData.get("email").trim();
  let password = formData.get("password").trim();
  let repass = formData.get("repass").trim();
  if (password != repass) {
    alert("Passwords don't match!");
    return;
  }
  try {
    const res = await fetch("http://localhost:3030/users/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok != true) {
      const error = await res.json();
      throw new Error(error.message);
    }
    const data = res.json();
    const userData = {
      username: data.username,
      id: data._id,
      token: data.accesToken,
    };
    sessionStorage.setItem("userData", JSON.stringify(userData));
    updateUserNav();
    showHomePage();
  } catch (err) {
    alert(err.message);
  }
}
