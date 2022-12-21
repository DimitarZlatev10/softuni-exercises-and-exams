function solve(input) {
  let biggest = Number.MIN_SAFE_INTEGER;
  let holder = [];
  for (let number of input) {
    if (number >= biggest) {
      biggest = number;
      holder.push(biggest);
    }
  }
//   console.log(holder);
return holder
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
