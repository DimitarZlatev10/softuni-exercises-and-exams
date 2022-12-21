function solve(array) {
  let assocArr = {};
  for (let line of array) {
    let [garageNumber, carInfo] = line.split(" - ");
    if (!assocArr.hasOwnProperty(garageNumber)) {
      assocArr[garageNumber] = carInfo.toString();
    } else {
      assocArr[garageNumber] += "|" + carInfo;
    }
  }
  let entries = Object.entries(assocArr);
  for (let elem of entries) {
    let number = elem[0];
    let info = elem[1].split("|");
    console.log(`Garage № ${number}`);
    for (let line of info) {
      let output = "";
      line = line.replace(/: /g, ' - ');
      output += line;
      console.log(`--- ${output}`);
    }
  }
}
// solve([
//   "1 - color: blue, fuel type: diesel",
//   "1 - color: red, manufacture: Audi",
//   "2 - fuel type: petrol",
//   "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
// ]);
solve(['1 - color: green, fuel type: petrol',
'1 - color: dark red, manufacture: WV',
'2 - fuel type: diesel',
'3 - color: dark blue, fuel type: petrol']
)
