import { createIdea } from "../api/data.js";
import { showSection } from "../dom.js";
import { showCatalogPage } from "./catalog.js";

const section = document.getElementById("createPage");
const form = section.querySelector("form");
form.addEventListener("submit", onCreate);
section.remove();

export function showCreatePage() {
  showSection(section);
}

async function onCreate() {
  const formData = new FormData(form);
  const title = formData.get("title");
  const description = formData.get("description");
  const img = formData.get("imageURL");

  if (title.length < 6) {
    return alert("Title should be atleast 6 characters long!");
  }
  if (description.length < 10) {
    return alert("Description should be atleast 10 characters long!");
  }
  if (img.length < 5) {
    return alert("Img Url should be atleast 5 characters long!");
  }
  createIdea({ title, description, img });
  form.reset();
  showCatalogPage();
}
