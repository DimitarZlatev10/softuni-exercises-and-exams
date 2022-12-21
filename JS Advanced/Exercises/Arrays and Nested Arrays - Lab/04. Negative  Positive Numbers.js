function solve(input) {
  let holder = [];
  let length = input.length
  for (let i = 0; i < length; i++) {
    let number = input.shift();
    if (number < 0) {
      holder.unshift(number);
    } else {
      holder.push(number);
    }
  }
  console.log(holder);
}
solve([7, -2, 8, 9]);
