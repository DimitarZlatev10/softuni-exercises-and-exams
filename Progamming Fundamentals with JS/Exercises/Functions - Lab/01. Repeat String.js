function solve(text, times) {
  let holder = [];
  for (let index = 0; index < times; index++) {
    holder.push(text);
  }
  console.log(holder.join(""));
}
solve("abc", 3);
