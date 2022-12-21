function solve(input) {
    let budget = Number(input[0])
    let numberOfCards = Number(input[1])
    let numberOfProcessors = Number(input[2])
    let numberOfRam = Number(input[3])

    let priceForCard = numberOfCards * 250
    let priceForProcessors = priceForCard * 0.35
    let sumForProcessors = priceForProcessors * numberOfProcessors
    let priceForRam = priceForCard * 0.10
    let sumForRam = priceForRam * numberOfRam
    let totalSum = priceForCard + sumForProcessors + sumForRam 
    if(numberOfCards>numberOfProcessors){
    totalSum = totalSum - totalSum * 0.15
    }
if(totalSum<=budget){
    console.log(`You have ${(budget - totalSum).toFixed(2)} leva left!`);
}
else {
    console.log(`Not enough money! You need ${(totalSum - budget).toFixed(2)} leva more!`);
}
}
solve(["900", "2", "1", "3"]);
solve (["920.45", "3", "1", "1"])