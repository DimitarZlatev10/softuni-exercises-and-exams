function solve(input) {
  let strawberriesLv = Number(input[0]);
  let malini = strawberriesLv / 2;
  let portokali = malini - 0.4 * malini;
  let bananas = malini - 0.8 * malini;
  let sumMalini = Number(input[3]) * malini;
  let sumPortokali = Number(input[2]) * portokali;
  let sumBananas = bananas * Number(input[1]);
  let sumStrawberries = Number(input[4]) * strawberriesLv;
  let totalSum = sumMalini + sumPortokali + sumBananas + sumStrawberries;
  console.log(totalSum.toFixed(2));
}
solve(["48", "10", "3.3", "6.5", "1.7"]);
