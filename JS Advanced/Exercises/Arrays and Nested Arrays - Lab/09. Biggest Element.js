function solve(input) {
  let biggestNumber = Number.MIN_SAFE_INTEGER;
  for (let line of input) {
    line = line.sort((a, b) => b - a);
    if (line[0] > biggestNumber) {
      biggestNumber = line[0];
    }
  }
  return biggestNumber;
}
solve([
  [20, 50, 10],
  [8, 33, 145],
]);
