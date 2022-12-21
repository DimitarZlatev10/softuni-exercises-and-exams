function solve(input) {
  let result = "";
  for (let char of input) {
    if (char === char.toUpperCase()) {
      result += " ";
      result += char;
    } else {
      result += char;
    }
  }
  result = result.trim();
  console.log(result.split(" ").join(", "));
}
solve("SplitMeIfYouCanHaHaYouCantOrYouCan");
