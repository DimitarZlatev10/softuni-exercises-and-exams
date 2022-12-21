function solve(num1, num2) {
  let number1 = num1;
  let number2 = num2;

  while (number1 != number2) {
    if (number1 > number2) {
      number1 -= number2;
    } else {
      number2 -= number1;
    }
  }

  console.log(`${number1}`);
}
solve(15, 5);
