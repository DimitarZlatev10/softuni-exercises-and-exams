function solve(input){
let fats = Number(input[0])
let proteins = Number(input[1])
let carbohydrates = Number(input[2])
let totalCalories = Number(input[3])
let waterRetention = Number(input[4])

let totalFats = (fats * totalCalories /100) / 9
let totalProteins = (proteins* totalCalories/100 ) / 4
let totalCarbohydrates = (carbohydrates*totalCalories/100) / 4
let kgFood = totalFats + totalProteins + totalCarbohydrates
let caloriesForGram =  totalCalories / kgFood 
waterRetention = 100 - waterRetention 
let oneGram = waterRetention * caloriesForGram /100
console.log(oneGram.toFixed(4));
}
solve (["60", "25", "15", "2500", "60"])