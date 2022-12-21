function solve(input){

    let budget = Number(input[0])
    let litresGas = Number(input[1])
    let day = input[2]

    let priceForGas = litresGas * 2.10
    let totalExcursion =priceForGas + 100
    if(day =='Saturday'){
        totalExcursion -= totalExcursion * 0.10
    }else if (day =='Sunday'){
        totalExcursion -= totalExcursion *0.20
    }
    if(budget >= totalExcursion){
        console.log(`Safari time! Money left: ${(budget-totalExcursion).toFixed(2)} lv.`);
    }else if (budget <totalExcursion){
console.log(`Not enough money! Money needed: ${(totalExcursion-budget).toFixed(2)} lv.`);
    }
}
solve (["1000", "10", "Sunday"])