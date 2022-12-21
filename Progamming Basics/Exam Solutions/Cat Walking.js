function solve(input) {
  let minutesWalk = Number(input[0]);
  let walksDay = Number(input[1]);
  let calories = Number(input[2]);

  let totalWalksPerDay = minutesWalk * walksDay;
  let totalBurnedCals = totalWalksPerDay * 5;
  let percent = calories * 0.5;
  if (totalBurnedCals >= percent) {
    console.log(
      `Yes, the walk for your cat is enough. Burned calories per day: ${totalBurnedCals}.`
    );
  } else {
    console.log(
      `No, the walk for your cat is not enough. Burned calories per day: ${totalBurnedCals}.`
    );
  }
}
solve(["30", "3", "600"]);
solve(["15", "2", "500"]);
