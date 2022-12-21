import { showView } from "./dom.js";
import { showHome } from "./home.js";

const createSection = document.getElementById("add-movie");
const form = createSection.querySelector("form");
form.addEventListener("submit", onSubmit);
createSection.remove();

export function showCreate() {
  showView(createSection);
}

async function onSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const title = formData.get("title");
  const description = formData.get("description");
  const img = formData.get("imageUrl");

  await createMovie(title, description, img);
  form.reset();
  showHome();
}
async function createMovie(title, description, img) {
  const {token} =  JSON.parse(sessionStorage.getItem("userData"));

  await fetch("http://localhost:3030/data/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": token,
    },
    body: JSON.stringify({ title, description, img }),
  });
}

// async function createMovie(event) {
//   event.preventDefault();
//   const formData = new FormData(form);
//   const title = formData.get("title");
//   const description = formData.get("description");
//   const img = formData.get("imageUrl");
//   if (title == "" || img == "" || description == "") {
//     return;
//   }
//   const token = JSON.parse(sessionStorage.getItem("userData"));
//   await fetch("http://localhost:3030/data/movies", {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//       "X-Authorization": token.accessToken,
//     },
//     body: JSON.stringify({ title, description, img }),
//   });
//   showHome();
// }
