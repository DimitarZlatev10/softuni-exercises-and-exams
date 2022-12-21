function solve(array) {
  let holder = [];
  for (let i = 0; i <= array.length; i++) {
    let sorted = array.sort((a, b) => b - a);
    holder.push(sorted[0])
    sorted.shift()
    sorted = array.sort((a,b)=>a-b)
    holder.push(sorted[0])
    sorted.shift()
    i=0
  }
  console.log(holder.join(' '));
}
solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
