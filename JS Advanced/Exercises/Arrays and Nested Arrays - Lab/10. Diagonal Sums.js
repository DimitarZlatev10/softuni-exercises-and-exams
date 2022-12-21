function solve(input) {
  let main = input[0][0];
  let secondary = input[0][input.length - 1];
  for (let i = 1; i < input.length; i++) {
    let currRow = input[i];
    main += currRow[i];

    secondary += currRow[input.length - 1 - i];
  }
  let holder = [];
  holder.push(main);
  holder.push(secondary);
  console.log(holder.join(' '));
}
solve([
  [20, 40],
  [10, 60],
]);
solve([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
