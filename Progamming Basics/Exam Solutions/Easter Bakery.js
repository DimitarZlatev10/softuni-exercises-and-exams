function solve(input) {
    let priceForFlour = Number(input[0])
    let kgOfFlour = Number(input[1])
    let kgOfSugar = Number(input[2])
    let numberOfEggs = Number(input[3])
    let packetsMaq = Number(input[4])

    let priceForSugar = priceForFlour * 0.75
    let priceOfEggs = priceForFlour *1.1 
    let priceForMaq = priceForSugar * 0.2
    let sumForFlour = priceForFlour *kgOfFlour
    let sumForSugar  = priceForSugar * kgOfSugar
    let sumForEggs = priceOfEggs * numberOfEggs
    let sumForMaq = priceForMaq *packetsMaq
    let  totalSum = sumForFlour + sumForSugar + sumForEggs + sumForMaq
    console.log(totalSum.toFixed(2));
}
solve(["50", "10", "3.5", "6", "1"]);
