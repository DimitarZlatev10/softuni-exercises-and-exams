function solve(array) {
  let gladiators = {};
  for (let line of array) {
      if(line.includes(' -> ')){
      let tokens = line.split(' -> ')
      let gladiatorName = tokens[0]
      let skill = tokens[1]
      let power = Number(tokens[2])
      if(!gladiators.hasOwnProperty(gladiatorName[0])){
          gladiators[gladiatorName]=[]
      }
      if(!gladiators[gladiatorName].hasOwnProperty[skill]){
          gladiators[gladiatorName][skill] = power
          
      }
     } else if (line.includes(' vs ')){
         let players = line.split(' vs ')
         let gladiatorOne = players[0]
         let gladiatorTwo = players[1]
         let opponentOneSkills = Object.keys(gladiators[gladiatorOne]) 
         let opponentTwoSkills = Object.keys(gladiators[gladiatorTwo])
     }
  }
}
solve([
  "Peter -> Duck -> 400",
  "Julius -> Shield -> 150",
  "Gladius -> Heal -> 200",
  "Gladius -> Support -> 250",
  "Gladius -> Shield -> 250",
  "Peter vs Gladius",
  "Gladius vs Julius",
  "Gladius vs Maximilian",
  "Ave Cesar",
]);
