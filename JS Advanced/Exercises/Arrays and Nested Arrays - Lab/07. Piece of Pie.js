function solve(input, one, two) {
  let indexOfOne = input.indexOf(one);
  let indexOfTwo = input.indexOf(two);
  let holder =[]
  for (let i = indexOfOne; i <= indexOfTwo; i++) {
   holder.push(input[i])
  }
  return holder
}
solve(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],
  "Key Lime Pie",
  "Lemon Meringue Pie"
);
