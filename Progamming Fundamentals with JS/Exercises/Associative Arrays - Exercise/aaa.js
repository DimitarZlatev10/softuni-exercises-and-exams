function solve(arr) {
  let gladiators = {};
  for (let line of arr) {
      if(line.includes(' -> ')){
    let tokens = line.split(" -> ");
    let gladiatorName = tokens[0];
    let skill = tokens[1];
    let power = Number(tokens[2]);
    if (!gladiators.hasOwnProperty(gladiatorName)) {
      gladiators[gladiatorName] = {};
    }
    if (!gladiators[gladiatorName].hasOwnProperty(skill)) {
      gladiators[gladiatorName][skill] = power;
    } else {
      if (gladiators[gladiatorName][skill] < power) {
        gladiators[gladiatorName][skill] = power;
      }
    }
  }else if (line.includes(' vs ')){

}
  }
let names = Object.entries(gladiators)
let array = []
for (let elem of names) {
    let name = elem[0]
    let pow = Object.entries(elem[1])
    let sum = pow.map(a => a[1]).reduce((a, b) => a + b)
    array.push([name, pow, sum])
    
}
array.sort((a, b) => b[2] - a[2] || a[0].localeCompare(b[0]))
for (let part of array) {
  console.log(`${part[0]}: ${part[2]} skill`);
  part[1]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(x => console.log(`- ${x[0]} <!> ${x[1]}`))
}
}
solve([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    
    ]
    );
