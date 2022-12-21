function focused() {
  let mainDiv = document.getElementsByTagName("div")[0];

  let applyingFocus = Array.from(mainDiv.getElementsByTagName("input"));
  for (let line of applyingFocus) {
    line.addEventListener("focus", (e) => {
      let parent = e.target.parentNode;
      parent.classList.add("focused");
    });
  }
  for (let line of applyingFocus) {
    line.addEventListener("blur", (e) => {
      let parent = e.target.parentNode;
      parent.classList.remove("focused");
    });
  }
}
