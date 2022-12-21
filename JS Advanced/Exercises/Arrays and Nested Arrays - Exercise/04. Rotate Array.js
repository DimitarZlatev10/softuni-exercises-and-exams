function solve(input, times) {
  for (let i = 0; i < times; i++) {
    let popped = input.pop();
    input.unshift(popped);
  }
  console.log(input.join(" "));
}
solve(["1", "2", "3", "4"], 2);
solve(["Banana", "Orange", "Coconut", "Apple"], 15);
