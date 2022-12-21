function solve(input){
let days = Number(input[0])
let leftFoodKg =Number(input[1])
let foodFirstDeerKg = Number(input[2])
let foodSecondDeerKg = Number(input[3])
let foodThirdDeerKg = Number(input[4])
 
let firstDeer = days * foodFirstDeerKg 
let secondDeer = days * foodSecondDeerKg
let thirdDeer = days * foodThirdDeerKg
let totalFood = firstDeer + secondDeer +thirdDeer
 if(leftFoodKg>=totalFood){
     leftFoodKg -=totalFood
     console.log(`${Math.floor(leftFoodKg)} kilos of food left.`);
 }else if (leftFoodKg<totalFood){
     totalFood -=leftFoodKg
     console.log(`${Math.ceil(totalFood)} more kilos of food are needed.`);
 }

}
solve (["2", "10", "1", "1", "2"])