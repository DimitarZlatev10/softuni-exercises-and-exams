function solve(numOne, numTwo) {
  let f = 1;
  let f1 = 1
  for (let i = 1; i <= numOne; i++) {
    f *= i;
  }
  for (let j = 1; j <= numTwo; j++) {
      f1*=j
      
  }
  console.log(`${(f / f1).toFixed(2)}`);
}
solve(5, 2);
