function solve(input) {
  let array = input[0].toString().split("");
  let holder = {};
  for (let i = 0; i < array.length; i++) {
    let word = array[i];
    if (!holder.hasOwnProperty(word)) {
      holder[word] = [];
    }
    holder[word].push(i);
  }
  let entries = Object.entries(holder);
  for (let [key, value] of entries) {
    console.log(`${key}:${value.join("/")}`);
  }
}
// solve(["abababa"]);
solve([ 'abababa', '' ])
