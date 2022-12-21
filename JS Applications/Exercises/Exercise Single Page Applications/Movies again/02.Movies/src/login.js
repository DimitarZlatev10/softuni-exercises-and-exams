import { updateNav } from "./app.js";
import { showView } from "./dom.js";
import { showHome } from "./home.js";

document.getElementById("loginBtn").addEventListener("click", showLogin);
const loginSection = document.getElementById("form-login");
const form = loginSection.querySelector("form");
form.addEventListener("submit", onLogin);

loginSection.remove();

export function showLogin() {
  showView(loginSection);
}

async function onLogin(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const res = await fetch("http://localhost:3030/users/login", {
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

    const data = await res.json();
    sessionStorage.setItem("userData",JSON.stringify({
        email: data.email,
        id: data._id,
        token: data.accessToken,
      })
    );
    form.reset();
    updateNav()
    showHome();
  } catch (error) {
    alert(error.message);
  }
}
