function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    //   TODO:
    let tableInfo = document.querySelectorAll("tbody>tr");
    let input = document.getElementById("searchField").value;
    for (let row of tableInfo) {
      if (
        row.textContent.toLowerCase().includes(input.toLowerCase()) &&
        input !== ""
      ) {
        row.setAttribute("class", "select");
      } else {
        row.removeAttribute("class");
      }
    }
  }
}
