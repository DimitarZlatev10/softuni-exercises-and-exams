function solve(input){
const puzzle = 2.60
const talkingDoll = 3
const teddyBear = 4.10
const minion = 8.20
const train = 2

const priceForVacation = Number(input[0])
const numberOfPuzzles = Number(input[1])
const numberOfTalkingDolls = Number(input[2])
const numberOfTeddyBears = Number(input[3])
const  numberOfMinions = Number(input[4])
const numberOfTrains = Number(input[5])

const totalSumFromToys = numberOfPuzzles*puzzle + numberOfTalkingDolls*talkingDoll + numberOfTeddyBears*teddyBear + numberOfMinions*minion  + numberOfTrains*train
const totalNumberOfToys  = numberOfPuzzles+numberOfTalkingDolls+numberOfTeddyBears+numberOfMinions+numberOfTrains
if (totalSumFromToys>50){
    
}
    
const discount = totalSumFromToys *0.25
let finalSum = totalSumFromToys - discount
let rent = finalSum*0.1
let profit = finalSum - rent 
const remainingSum = Number(profit - priceForVacation).toFixed(2)
if (profit>priceForVacation){
     console.log(`Yes! ${remainingSum} lv left.`);}

 else if (profit<priceForVacation){
    const remainingSum = Number(priceForVacation-profit).toFixed(2)
    console.log(`Not enough money! ${remainingSum.toFixed(2)} lv needed.`);
 }


}
solve(['40.8','20','25','30','50','10'])
solve(['320','8','2','5','5','1'])
