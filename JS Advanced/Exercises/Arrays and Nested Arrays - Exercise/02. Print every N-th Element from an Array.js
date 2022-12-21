function solve(input, times) {
  let holder = [];
  for (let i = 0; i < input.length; i++) {
    if (i % times === 0) {
      holder.push(input[i]);
    }
  }
  return holder
}
solve(["5", "20", "31", "4", "20"], 2);
