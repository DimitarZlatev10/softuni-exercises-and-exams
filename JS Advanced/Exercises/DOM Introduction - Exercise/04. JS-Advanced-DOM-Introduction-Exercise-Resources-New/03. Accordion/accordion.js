function toggle() {
  let button = document.querySelector(".button").textContent;
  if (button === "More") {
    document.getElementById("extra").style.display = "block";
    document.querySelector(".button").textContent = "Less";
    button = "Less";
  } else if (button === "Less") {
    document.getElementById("extra").style.display = "none";
    document.querySelector(".button").textContent = "More";
    button = "More";
  }
}
