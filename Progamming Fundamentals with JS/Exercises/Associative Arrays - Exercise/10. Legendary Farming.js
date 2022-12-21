function solve(array) {
  array = array.toLowerCase().split(" ");
  let assocArr = {
    fragments: 0,
    shards: 0,
    motes: 0,
  };
  for (let i = 0; i < array.length - 1; i += 2) {
    let amount = Number(array[i]);
    let currency = array[i + 1];
    if (!assocArr.hasOwnProperty(currency)) {
      assocArr[currency] = amount;
    } else {
      assocArr[currency] += amount;
    }
    if (assocArr["fragments"] >= 250) {
      console.log(`Valanyr obtained!`);
      assocArr["fragments"] -= 250;
      break;
    } else if (assocArr["shards"] >= 250) {
      console.log(`Shadowmourne obtained!`);
      assocArr["shards"] -= 250;
      break;
    } else if (assocArr["motes"] >= 250) {
      console.log(`Dragonwrath obtained!`);
      assocArr["motes"] -= 250;
      break;
    }
  }
  let entries = Object.entries(assocArr);
  let keyMaterial = {};
  let junkMaterial = {};
  for (let elem of entries) {
    let name = elem[0];
    let value = elem[1];
    if (name === "shards" || name === "fragments" || name === "motes") {
      keyMaterial[name] = value;
    } else {
      junkMaterial[name] = value;
    }
  }
  let sortedKey = Object.entries(keyMaterial).sort((a, b) =>
    a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1] - a[1]
  );
  let sortedJunk = Object.entries(junkMaterial).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  for (let [key, value] of sortedKey) {
    console.log(`${key}: ${value}`);
  }
  for (let [key, value] of sortedJunk) {
    console.log(`${key}: ${value}`);
  }
}
// solve("3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards");
solve(
  "123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver"
);
