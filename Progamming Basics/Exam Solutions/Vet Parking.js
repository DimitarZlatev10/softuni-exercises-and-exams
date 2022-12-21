function solve(input) {
  let numberOfDays = Number(input[0]);
  let numberOfHours = Number(input[1]);
  let day = 1;
  let hours = 1;
  let sum = 0;
  let totalSum = 0
  for (let i = 1; i <= numberOfDays; i++) {
    for (let j = 1; j <= numberOfHours; j++) {
      if (day % 2 == 0 && hours % 2 == 1) {
        sum += 2.5;
      } else if (day % 2 == 1 && hours % 2 == 0) {
        sum += 1.25;
      } else {
        sum += 1;
      }
      hours++
    }
    
    totalSum+=sum
    console.log(`Day: ${day} - ${sum.toFixed(2)} leva`);
    day++
    sum=0
    hours = 1
  }
  console.log(`Total: ${totalSum.toFixed(2)} leva`);
}
solve(["2", "5"]);
