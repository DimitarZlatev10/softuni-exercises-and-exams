function solve(input) {
  let holder = [];
  let sorted = input.sort((a, b) => a - b);
  for (let i = 0; i < 2; i++) {
    holder.push(sorted[i]);
  }
  console.log(holder.join(" "));
}
solve([30, 15, 50, 5]);
