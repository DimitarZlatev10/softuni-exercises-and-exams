function solve(input) {
  let numbers = input.toString().split("");
  let number = Number(numbers[0]);
  let result = 0;
  let boolean = true;
  for (let line of numbers) {
    line = Number(line);
    if (line !== number) {
      boolean = false;
    }
    result += line;
  }
  console.log(boolean);
  console.log(result);
}
solve(2222222);
