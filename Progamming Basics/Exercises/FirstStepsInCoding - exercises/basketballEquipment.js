function solve(input){

const priceOfTrainingForYear = Number(input[0])
const priceOfSneakers = priceOfTrainingForYear - (priceOfTrainingForYear*0.4)
const priceOfKit =  priceOfSneakers - (priceOfSneakers*0.2)
const priceOfBall = priceOfKit /4
const priceOfAcessoires = priceOfBall/5
const totalPriceForEquipment = Number(priceOfTrainingForYear + priceOfSneakers +priceOfKit +priceOfBall+priceOfAcessoires).toFixed(2)
console.log(totalPriceForEquipment);

}
solve(['320'])
solve(['550'])
solve(['230'])
