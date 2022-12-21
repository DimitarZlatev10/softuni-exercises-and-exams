function solve(input) {
  let i = 0;
  let tournament = input[i];
  let resultOfDesi = 0;
  let resultOfOtherTeam = 0;
  let match = 0;
  let difference = 0;
  let totalMatches= 0
  let totalWins = 0
  let totalLose= 0 
  while (tournament !== "End of tournaments") {
    tournament = input[i++];
    let games = Number(input[i++]);
    while (tournament !== "End of tournaments") {
      resultOfDesi = Number(input[i++]);
      resultOfOtherTeam = Number(input[i++]);
      match++;
      totalMatches++
      if (resultOfDesi > resultOfOtherTeam) {
          totalWins++
        difference = resultOfDesi - resultOfOtherTeam;
        console.log(
          `Game ${match} of tournament ${tournament}: win with ${difference} points.`
        );
      } else {
          totalLose++
        difference = resultOfOtherTeam - resultOfDesi;
        console.log(
          `Game ${match} of tournament ${tournament}: lost with ${difference} points.`
        );
      }
      if (match == games) {
        break;
      }
    }
    match = 0;
    tournament = input[i];
  }
console.log(`${(totalWins / totalMatches*100).toFixed(2)}% matches win`);
console.log(`${(totalLose / totalMatches*100).toFixed(2)}% matches lost`);
}
solve([
  "Dunkers",
  "2",
  "75",
  "65",
  "56",
  "73",
  "Fire Girls",
  "3",
  "67",
  "34",
  "83",
  "98",
  "66",
  "45",
  "End of tournaments",
]);
