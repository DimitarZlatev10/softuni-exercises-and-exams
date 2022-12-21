import { showView } from "./dom.js"
import { showHome} from './home.js'
import {updateNav} from './app.js'

document.getElementById('registerBtn').addEventListener('click',showRegister)
const registerSection = document.getElementById("form-sign-up")
const form = registerSection.querySelector('form')
form.addEventListener('submit', onRegister)
registerSection.remove()

export function showRegister(){
    showView(registerSection)
}

async function onRegister(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");
    const repass = formData.get('repeatPassword')

    if(password!=repass){
        alert('Passwords don\'t match!')
        return
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
  
      const data = await res.json();
      sessionStorage.setItem(
        "userData",
        JSON.stringify({
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