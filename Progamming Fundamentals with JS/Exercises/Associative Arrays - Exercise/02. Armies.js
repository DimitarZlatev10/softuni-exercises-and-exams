function solve(array) {
  let leaders = [];
  let armies = {};
  let assocArr = [];
  for (let line of array) {
    if (line.includes("arrives")) {
      let leaderName = line.split(" arrives")[0];
      if (!armies.hasOwnProperty(leaderName)) {
        armies[leaderName] = {
            armiesName: {},
            totalArmyCount: 0
        };
    }
    leaders.push(leaderName);
    } else if (line.includes(":")) {
      let tokens = line.split(": ");
      let leaderName = tokens[0];
      let armyName = tokens[1].split(", ")[0];
      let amount = Number(tokens[1].split(", ")[1]);
      if (armies.hasOwnProperty(leaderName)) {
        if (!armies[leaderName].armiesName.hasOwnProperty(armyName)) {
            armies[leaderName].armiesName[armyName] = Number(amount);
            armies[leaderName].totalArmyCount += Number(amount);
        }
        
      }
    }
  }
}
solve([
  "Rick Burr arrives",
  "Fergus: Wexamp, 30245",
  "Rick Burr: Juard, 50000",
  "Findlay arrives",
  "Findlay: Britox, 34540",
  "Wexamp + 6000",
  "Juard + 1350",
  "Britox + 4500",
  "Porter arrives",
  "Porter: Legion, 55000",
  "Legion + 302",
  "Rick Burr defeated",
  "Porter: Retix, 3205",
]);
