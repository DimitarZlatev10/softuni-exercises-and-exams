function solve(input) {
  let sorted = input.sort((a, b) => a.localeCompare(b));
  for (let i = 1; i <= sorted.length; i++) {
    console.log(`${i}.${input[i - 1]}`);
  }
}
solve(["John", "Bob", "Christina", "Ema"]);
