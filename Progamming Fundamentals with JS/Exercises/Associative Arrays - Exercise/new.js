function solve(arr) {
  let gladiators = {};
  for (let line of arr) {
    if (line.includes("Ave Cesar")) {
      break;
    }
    if (line.includes(" -> ")) {
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
    } else if (line.includes(" vs ")) {
      let [gladiatorA, gladiatorB] = line.split(" vs ");
      if (
        gladiators.hasOwnProperty(gladiatorA) &&
        gladiators.hasOwnProperty(gladiatorB)
      ) {
        let skillA = gladiators[gladiatorA];
        let skillB = gladiators[gladiatorB];
        for (let elA in skillA) {
          for (let elB in skillB) {
            if (elA === elB) {
              if (skillA[elA] > skillB[elB]) {
                delete gladiators[gladiatorB];
              }
            } else if (skillA[elA] < skillB[elB]) {
              delete gladiators[gladiatorA];
            }
          }
        }
      }
    }
  }
  let list = Object.entries(gladiators)
  let array = []
  for (let elem of list) {
      let name = elem[0]
      let pow = Object.entries(elem[1])
      let sum = pow.map(a => a[1]).reduce((a, b) => a + b)
      array.push(name , pow , sum)
      
  }
}
solve([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ]
    );
