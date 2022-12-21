function solve(input) {

    let numberOfGuests = Number(input[0])
    let priceForKuvert = Number(input[1])
    let budget = Number(input[2])

    if(numberOfGuests>=10 &&numberOfGuests<=15){
        priceForKuvert *=0.85
    }if(numberOfGuests>15 && numberOfGuests<=20){
        priceForKuvert *=0.80
    }if(numberOfGuests>25){
        priceForKuvert *=0.75
    }
    let priceOfCake = budget  * 0.10
    let totalPriceForParty = numberOfGuests * priceForKuvert +priceOfCake 

    if(totalPriceForParty>budget){
    totalPriceForParty -= budget
    console.log(`No party! ${totalPriceForParty.toFixed(2)} leva needed.`);
    }else {
        budget -= totalPriceForParty 
        console.log(`It is party time! ${budget.toFixed(2)} leva left.`);
    }


}
//solve(["18", "30", "450"]);
solve(["8",
"25",
"340"])