function solve(input) {
  let length = input.length;
  let holder = [];
  for (let i = 0; i < length; i++) {
    if (i % 2 === 0) {
      input = input.sort((a, b) => a - b);
    } else {
      input = input.sort((a, b) => b - a);
    }
    let number = input.shift()
    holder.push(number)
  }
  return holder
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
