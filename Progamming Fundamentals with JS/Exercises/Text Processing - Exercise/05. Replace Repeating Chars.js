function solve(input) {
  let result = "";
  for (let char of input) {
    if (char !== result[result.length - 1]) {
      result += char;
    }
  }
  console.log(result);
}

solve("aaaaabbbbbcdddeeeedssaa");
