function solve(input) {
  let info = {};
  for (let line of input) {
    let [city, population] = line.split(" <-> ");
    population = Number(population);
    if (!info[city]) {
      info[city] = {
        popu: 0,
      };
    }
    info[city].popu += population;
  }
  let entries = Object.entries(info);
  for (let entry of entries) {
    console.log(`${entry[0]} : ${entry[1].popu}`);
  }
}
solve([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
