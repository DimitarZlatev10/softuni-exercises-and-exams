function solve() {
  document.getElementById("searchBtn").addEventListener("click", onClick);

  function onClick() {
    const tableBody = document.querySelectorAll("tbody tr");
    const input = document.getElementById("searchField").value;

    for (const row of tableBody) {
      if (
        row.textContent.toLowerCase().includes(input.toLowerCase()) &&
        input !== ""
      ) {
        row.className = "select";
      } else {
        row.className = "none";
      }
    }
  }
}
