function solve(input) {
let quantityOfFood = Number(input[0])
let boughFood = quantityOfFood *1000
let dogNeedsToEat = 0
let index = 1
let eatenFood = input[index]
let leftFood = 0

while (eatenFood !='Adopted'){
 eatenFood = Number(input[index])   
dogNeedsToEat +=eatenFood
index ++ 
eatenFood = input[index]
}

if(boughFood>=dogNeedsToEat){
  leftFood=  boughFood-dogNeedsToEat
    console.log(`Food is enough! Leftovers: ${leftFood} grams.`);
}
else {
leftFood = dogNeedsToEat - boughFood
console.log(`Food is not enough. You need ${leftFood} grams more.`);
}
}
solve(["4", "130", "345", "400", "180", "230", "120", "Adopted"]);
solve(["3", "1000","1000", "1000", "Adopted"])
solve (["2", "999", "456", "999", "999",'123','456','Adopted'])
