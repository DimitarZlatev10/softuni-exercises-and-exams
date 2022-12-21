function solve(input){
    const safetyNylon = 1.50
    const paint = 14.50
    const thinner = 5

    const neededAmountOfNylon = Number(input[0])
    const neededAmountOfPaint = Number(input[1])
    const amountOfThinner = Number(input[2])
    const hoursNeededToFinishWork = Number(input[3])
const bonusNylon = 2
const bonusPaint = neededAmountOfPaint * 0.1
const priceOfBags = 0.40

const neededNylon = (neededAmountOfNylon+bonusNylon) * safetyNylon
const neededPaint = (neededAmountOfPaint+bonusPaint) * paint 
const neededThinner = amountOfThinner * thinner
const sumForAllMaterialsPlusBags = neededNylon + neededPaint + neededThinner + priceOfBags 
const salaryForWorkers = (sumForAllMaterialsPlusBags*0.3)* hoursNeededToFinishWork
const sumForEverything = Number(salaryForWorkers + sumForAllMaterialsPlusBags).toFixed(2)
console.log('Total expenses:'+ sumForEverything +' lv.');


}
solve(['10','11','4','8'])
solve(['5','10','10','1'])
solve(['90','99','28','9'])
