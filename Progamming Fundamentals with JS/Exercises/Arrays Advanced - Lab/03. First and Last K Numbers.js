function solve(array) {
  let k = array.shift();
  console.log(array.slice(0, k).join(" "));
  console.log(array.slice(-k).join(" "));
}
solve([2, 7, 8, 9]);
solve([3, 6, 7, 8, 9]);
