function solve(input) {
  let towns = {};
  input.pop();
  for (let line of input) {
    line = line.split("||");
    let townName = line[0];
    let townPopulation = Number(line[1]);
    let townGold = Number(line[2]);
    if (townName === "Sail") {
      break;
    }
    if (!towns[townName]) {
      towns[townName] = {
        population: 0,
        gold: 0,
      };
    }
    towns[townName].population += townPopulation;
    towns[townName].gold += townGold;
  }
  let actionIndex = input.indexOf("Sail") + 1;
  input = input.slice(actionIndex);
  for (let actionLine of input) {
    actionLine = actionLine.split("=>");
    let action = actionLine[0];
    let townName = actionLine[1];
    if (action === "Plunder") {
      let townPopulation = Number(actionLine[2]);
      let townGold = Number(actionLine[3]);
      towns[townName].population -= townPopulation;
      towns[townName].gold -= townGold;
      console.log(
        `${townName} plundered! ${townGold} gold stolen, ${townPopulation} citizens killed.`
      );
      if (towns[townName].population <= 0 || towns[townName].gold <= 0) {
        delete towns[townName];
        console.log(`${townName} has been wiped off the map!`);
      }
    } else if (action === "Prosper") {
      let townGold = Number(actionLine[2]);
      if (townGold >= 0) {
        towns[townName].gold += townGold;
        console.log(
          `${townGold} gold added to the city treasury. ${townName} now has ${towns[townName].gold} gold.`
        );
      } else {
        console.log(`Gold added cannot be a negative number!`);
      }
    }
  }
  towns = Object.entries(towns);
//   towns.sort((a,b)=>a[1]===b[1]?a[0].localeCompare(b[0]): b[1].gold - a[1].gold)
  if (towns.length === 0) {
    console.log(
      `Ahoy, Captain! All targets have been plundered and destroyed!`
    );
  } else {
    console.log(
      `Ahoy, Captain! There are ${towns.length} wealthy settlements to go to:`
    );
  }
  for (let town of towns) {
    let townName = town[0];
    console.log(
      `${townName} -> Population: ${town[1].population} citizens, Gold: ${town[1].gold} kg`
    );
  }
}
solve([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);
