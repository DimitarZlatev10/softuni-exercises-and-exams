function solve(startingYield){
let days = 0
let collected = 0
while(startingYield>=100){
 
    days++
    collected += startingYield-26
    startingYield-=10

    if(startingYield<100){
        collected-=26
    }

}
console.log(days);
console.log(collected);
}
solve(111)