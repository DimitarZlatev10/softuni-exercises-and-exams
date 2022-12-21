function solve(n) {
  let number = n;
  let sum = 0;
  while (number >= 1) {
    number = number / 2;
    sum += Math.ceil(number);
  }

  if (sum === n) {
    console.log(`We have a perfect number!`);
  } else {
    console.log(`It's not so perfect.`);
  }
}

solve(496);
