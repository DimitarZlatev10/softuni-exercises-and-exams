function sumTable() {
  let cost = document.querySelectorAll("td:nth-child(2)");
  cost = Array.from(cost);
  cost.pop();
  let result = 0;
  for (let sum of cost) {
    sum = Number(sum.textContent);
    result += sum;
  }
  document.getElementById("sum").textContent = result;
}
