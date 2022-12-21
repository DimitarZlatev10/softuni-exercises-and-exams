function solve(array) {
  let assocArr = [];
  let streets = array.shift().split(", ");
  for (let i = 0; i < streets.length; i++) {
    let streetName = streets[i];
    if (!assocArr.hasOwnProperty(streetName)) {
      assocArr[streetName] = [];
    }
  }

  for (let line of array) {
    let [street, name] = line.split(" - ");
    if (assocArr.hasOwnProperty(street)) {
      if (!assocArr[street].hasOwnProperty(name)) {
        assocArr[street].push(name);
      }
    }
  }

  let sorted = Object.entries(assocArr).sort(
    (a, b) => b[1].length - a[1].length
  );
  for (let [key, value] of sorted) {
    let name = key;
    console.log(`${name}: ${value.length}`);
    for (let line of value) {
      console.log(`--${line}`);
    }
  }
}
solve([
  "Abbey Street, Herald Street, Bright Mews",
  "Herald Street - Keity",
  "Abbey Street - Liam",
  "Bright Mews - Mark",
  "Abbey Street - John",
]);
