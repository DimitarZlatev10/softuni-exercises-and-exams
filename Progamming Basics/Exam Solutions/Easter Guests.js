function solve(input) {

    let priceForKozunak = 4
    let priceForEgg = 0.45
   let numberOfGuests = Number(input[0])
   let budget = Number(input[1])

   let numberOfKozunak = Math.ceil(numberOfGuests / 3) 
   let numberOfEggs = numberOfGuests * 2 
   let priceForKozunaks = priceForKozunak * numberOfKozunak
   let priceForEggs = numberOfEggs * priceForEgg
   let totalPrice = priceForKozunaks + priceForEggs
   
   if(totalPrice>budget){
   budget -= totalPrice
   console.log(`Lyubo doesn't have enough money.`);
   console.log(`He needs ${Math.abs(budget).toFixed(2)} lv. more.`);
   }else{
       totalPrice-=budget
    console.log(`Lyubo bought ${numberOfKozunak} Easter bread and ${numberOfEggs} eggs.`);
    console.log(`He has ${Math.abs(totalPrice).toFixed(2)} lv. left.`); 
   }


}
solve(["10", "35"]);
