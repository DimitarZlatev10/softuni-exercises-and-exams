function  solve(input){
let budget = Number(input[0])
let stuntman = Number(input[1])
let priceForClothesPerPerson = Number(input[2])

let decorPrice = budget*0.10

let totalPriceForClothes = stuntman *priceForClothesPerPerson

if(stuntman>150){
    totalPriceForClothes *= 0.90;
}
let totalMoney = decorPrice + totalPriceForClothes

if(totalMoney>budget){
    let moneyNeeded = totalMoney - budget
console.log(`Not enough money!`);
console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
   
}else{
    let moneyLeft = budget - totalMoney;
    console.log('Action!');
    console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
}


}
solve(['20000','120','55.5'])
solve(['15437.62','186','57.99'])
solve(['9587.88','222','55.68'])
