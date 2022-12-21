function solve(input) {
let customers = Number(input[0])
let index = 1
let totalSum = 0

for(i=1 ; i<=customers;i++){
    let basket = 0 
    let wreath = 0
    let chocolateBunny = 0
    let sum = 0
    let purchases = 0
    let comand = input[index++]
    while(comand!='Finish'){
        if(comand=='basket'){
            basket++
        }else if (comand =='wreath'){
            wreath++
        }else if (comand=='chocolate bunny'){
            chocolateBunny++
        }
        comand = input[index++]
        
        if(comand =='Finish'){
            purchases = basket+wreath+chocolateBunny
            sum = basket *1.50 + wreath * 3.80+ chocolateBunny*7
           if(purchases % 2 ==0){
               sum = sum - sum *0.20
           }
           console.log(`You purchased ${purchases} items for ${(sum).toFixed(2)} leva.`);
           totalSum +=sum
        }
    }
}
console.log(`Average bill per client is: ${(totalSum / customers).toFixed(2)} leva.`);

}
solve([
  "2",
  "basket",
  "wreath",
  "chocolate bunny",
  "Finish",
  "wreath",
  "chocolate bunny",
  "Finish",
]);
solve(["1",
"basket",
"wreath",
"chocolate bunny",
"wreath",
"basket",
"chocolate bunny",
"Finish"])
