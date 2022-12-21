function solve(input) {
    let priceForKozunak = 3.20
    let priceForEggs = 4.35
    let priceForKurabiq = 5.40
    let priceForDye = 0.15
    let  countOfEggs = 12

    let numberOfKozunak = Number(input[0])
    let numberOfEggs = Number(input[1])
    let kgKurabiq = Number(input[2])

    priceForKozunak *= numberOfKozunak
    priceForEggs *=numberOfEggs
    priceForKurabiq *=kgKurabiq  
    priceForDye *=countOfEggs * numberOfEggs
    let totalPrice = priceForKozunak + priceForEggs + priceForKurabiq + priceForDye
    console.log(totalPrice.toFixed(2));
}
solve(["3", "2", "3"]);
