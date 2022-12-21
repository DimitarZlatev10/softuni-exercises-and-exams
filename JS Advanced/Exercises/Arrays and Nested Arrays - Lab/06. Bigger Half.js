function solve(input) {
  let sorted = input.map(Number).sort((a, b) => a - b);
  let length = sorted.length;
  if (length % 2 === 0) {
    length /= 2;
  } else if (length % 2 !== 0) {
    length = Math.floor(length / 2);
  }

  let spliced = sorted.splice(0, length);
//   console.log(`[${sorted.join(', ')}]`);
return sorted
}
solve(['4', '7', '2', '5']);
// solve([3, 19, 14, 7, 2, 19, 6]);
