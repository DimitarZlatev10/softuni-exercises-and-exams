function solve(input) {
  let holder = [];
  for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0) {
      holder.push(input[i]);
    }
  }
  console.log(holder.join(' '));
}
solve(["20", "30", "40", "50", "60"]);
