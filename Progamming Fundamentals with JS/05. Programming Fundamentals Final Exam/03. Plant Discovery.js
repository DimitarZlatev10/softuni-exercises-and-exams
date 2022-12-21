function solve(input) {
  input.pop();
  let nums = Number(input.shift());
  let plantsInput = input.splice(0, nums);
  let plants = {};
  for (let line of plantsInput) {
    line = line.split("<->");
    let currPlant = line[0];
    let currentRarity = Number(line[1]);
    if (!plants[currPlant]) {
      plants[currPlant] = {
        rarity: 0,
        rating: 0,
        count: 0,
      };
    }
    plants[currPlant].rarity += currentRarity;
  }
  for (let line of input) {
    line = line.split(" - ");
    let command = line[0].split(": ")[0];
    let plantName = line[0].split(": ")[1];
    let currRating = Number(line[1]);
    if (command === "Rate") {
      if (plants.hasOwnProperty(plantName)) {
        plants[plantName].rating += currRating;
        plants[plantName].count += 1;
      } else {
        console.log(`error`);
      }
    } else if (command === "Update") {
      if (plants.hasOwnProperty(plantName)) {
        plants[plantName].rarity = currRating;
      } else {
        console.log(`error`);
      }
    } else if (command === "Reset") {
      if (plants.hasOwnProperty(plantName)) {
        plants[plantName].rating = 0;
        plants[plantName].count = 0;
      } else {
        console.log(`error`);
      }
    }
  }
  console.log(`Plants for the exhibition:`);
  plants = Object.entries(plants).sort((a, b) =>
    a[1].rarity === b[1].rarity
      ? b[1].rating - a[1].rating
      : b[1].rarity - a[1].rarity
  );
  for (let plant of plants) {
    let currRating = plant[1].rating;
    let currCount = plant[1].count;
    if (currRating > 0 && currCount > 0) {
      currRating /= currCount;
    } else {
      currRating = 0;
    }
    console.log(
      `- ${plant[0]}; Rarity: ${plant[1].rarity}; Rating: ${currRating.toFixed(
        2
      )}`
    );
  }
}
solve([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
