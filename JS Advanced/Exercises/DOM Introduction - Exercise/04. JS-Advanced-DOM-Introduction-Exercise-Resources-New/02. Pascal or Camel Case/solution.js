function solve() {
  let input = document.getElementById("text").value;
  let currCase = document.getElementById("naming-convention").value;
  let result = "";
  if (currCase === "Pascal Case") {
    input = input.toLowerCase();
    for (let char of input.split(" ")) {
      let first = char[0].toUpperCase();
      let second = char.split("").slice(1).join("");
      let final = first + second;
      result += final;
    }
  } else if (currCase === "Camel Case") {
    input = input.toLowerCase();
    for (let char of input.split(" ")) {
      let first = char[0].toUpperCase();
      let second = char.split("").slice(1).join("");
      let final = first + second;
      result += final;
    }
    result = result.split("");
    result[0] = result[0].toLowerCase();
    result = result.join("");
  } else {
    result += "Error!";
  }
  document.getElementById("result").textContent = result;
}
