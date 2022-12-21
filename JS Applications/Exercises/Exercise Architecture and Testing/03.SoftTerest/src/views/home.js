import { showSection } from "../dom.js";
import { showCatalogPage } from "./catalog.js";

const section = document.getElementById("homePage");
document.getElementById('getStartedBtn').addEventListener('click',showCatalogPage)
section.remove();

export function showHomePage() {
  showSection(section);
}
