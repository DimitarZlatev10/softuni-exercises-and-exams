function solve(numOne, numTwo, operator) {
  // 'multiply', 'divide', 'add', 'subtract'
  let multiply = (numOne, numTwo) => numOne * numTwo;
  let divide = (numOne, numTwo) => numOne / numTwo;
  let add = (numOne, numTwo) => numOne + numTwo;
  let subtract = (numOne, numTwo) => numOne - numTwo;
  switch (operator) {
    case "multiply":
      return multiply(numOne, numTwo);
    case "divide":
      return divide(numOne, numTwo);
    case "add":
      return add(numOne, numTwo);
    case "subtract":
      return subtract(numOne, numTwo);
  }
}
console.log(solve(5,5,'multiply'));

