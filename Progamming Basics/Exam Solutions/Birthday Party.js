function solve(input){
let rent = Number(input[0])
let priceOfCake = rent * 0.20
let priceForDrinks = priceOfCake - priceOfCake  *0.45
let priceForAnimator = rent / 3
console.log(rent + priceOfCake + priceForDrinks + priceForAnimator);

}
solve (['2250'])