function solve(input) {
let clients = Number(input[0])

let averageBill = 0
let index = 1
let comand = input[index]
let purchasedItems1 = 0
let sum1 = 0
let purchasedItems2 = 0
let sum2 =0

while(comand !=='Finish'){
    if(comand == 'basket'){
        sum1 +=1.50
        
        purchasedItems1++
       
    }if(comand =='wreath'){
        sum1 +=3.80
        
        purchasedItems1++
    }if(comand =='chocolate bunny'){
        sum1 +=7
        
        purchasedItems1++
    }
    index++
    comand = input[index]
    
}
if(purchasedItems1 % 2 ==0){
    sum1 *=0.80
}
console.log(`You purchased ${purchasedItems1} items for ${sum1.toFixed(2)} leva.`);
if(clients == 1){
    averageBill = sum1 / clients
    console.log(`Average bill per client is: ${averageBill.toFixed(2)} leva.`);
}
index++
comand = input[index]
if(clients >1){
while(comand !=='Finish'){
    if(comand == 'basket'){
        sum2 +=1.50
        
        purchasedItems2++
       
    }if(comand =='wreath'){
        sum2 +=3.80
        
        purchasedItems2++
    }if(comand =='chocolate bunny'){
        sum2 +=7
        
        purchasedItems2++
    }
    index++
    comand = input[index]
    
}

if(purchasedItems2 % 2 ==0){
    sum2 *=0.80
}
averageBill = (sum1 + sum2) / clients  
console.log(`You purchased ${purchasedItems2} items for ${sum2} leva.`);
console.log(`Average bill per client is: ${averageBill} leva.`);
}



}
solve(["2","basket","wreath","chocolate bunny","Finish","wreath","chocolate bunny","Finish",]);
//solve (["1","basket","wreath","chocolate bunny","wreath","basket","chocolate bunny","Finish"])
