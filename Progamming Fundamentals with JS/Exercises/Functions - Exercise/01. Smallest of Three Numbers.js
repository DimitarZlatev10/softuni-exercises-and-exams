function solve(numOne, numTwo, numThree) {
  let array = [numOne, numTwo, numThree];
  let min = Number(array[0]);
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  console.log(min);
}
solve(2, 3, 5);
