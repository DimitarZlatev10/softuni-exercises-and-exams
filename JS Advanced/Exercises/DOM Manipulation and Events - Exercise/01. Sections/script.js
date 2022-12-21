function create(words) {
  let content = document.querySelector("#content");
  for (let word of words) {
    let div = document.createElement("div");
    let paragraph = document.createElement("p");
    paragraph.textContent = word;
    paragraph.style.display = "none";
    div.appendChild(paragraph);
    content.appendChild(div);
  }

  content.addEventListener("click", (e) => {
    let current = e.target.children[0].style.display;
    if (current === "none") {
      e.target.children[0].style.display = "block";
      current = "block";
    } else if (current === "block") {
      e.target.children[0].style.display = "none";
      current = "none";
    }
  });
}
