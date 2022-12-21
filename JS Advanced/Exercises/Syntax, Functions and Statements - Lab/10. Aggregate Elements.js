function solve(input) {
  let plusResult = 0;
  let plusOneResult = 0;
  let concatResult = "";
  for (let line of input) {
    plusResult += line;
  }
  console.log(plusResult);
  for (let line of input) {
    plusOneResult += 1 / line;
  }
  console.log(plusOneResult);
  for (let line of input) {
    concatResult += line;
  }
  console.log(concatResult);
}
solve([1, 2, 3]);
